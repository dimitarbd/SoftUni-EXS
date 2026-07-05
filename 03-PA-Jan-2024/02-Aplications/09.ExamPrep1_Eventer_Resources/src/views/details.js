import { deleteEvent, getEventById } from '../data/events.js';
import { getVisitorByEventId, goToEvent, isGoing } from '../data/going.js';
import { html, page, render } from '../lib.js';
import { getUserData } from '../util.js';

let detailTemplate = (data, hasUser, isOwner, visitors, isUserGoing, onDelete, onGoing) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.name}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${data.date}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${data.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${visitors}</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            ${hasUser ? html`
                <div id="action-buttons">
                  ${ isOwner ? html`
                  <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                  <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : (!isUserGoing ? html`
                  <a href="javascript:void(0)" id="go-btn" @click=${onGoing}>Going</a> ` : null)}
                </div>` : null }
          </div>
        </section>
`;

export async function showDetailsView(ctx) {
    let id = ctx.params.id;
    // let event = await getEventById(id);

    let requests = [
        getEventById(id),
        getVisitorByEventId(id)
    ];


    let user = getUserData();

    if(user) {
        requests.push(isGoing(id, user._id));
    }

    let [event, visitors, isUserGoing] = await Promise.all(requests);

    let hasUser = !!user;
    let isOwner = hasUser && user._id == event._ownerId;

    render(detailTemplate(event, hasUser, isOwner, visitors, isUserGoing, onDelete, onGoing));

    async function onDelete() {
        let choice = confirm('Are you sure?');

        if (choice) {
            await deleteEvent(id);
            page.redirect('/catalog');

        }
    }

    async function onGoing() {
        await goToEvent(id);
        page.redirect('/catalog/' + id);
    };
}