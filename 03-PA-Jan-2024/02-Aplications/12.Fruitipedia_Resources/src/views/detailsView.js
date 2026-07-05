import { deleteFruitsById, getFruitsById} from '../data/data.js';
import { html, page, render } from '../lib.js';
import { isOwner } from '../util.js';


let detailsTemp = (item, hasOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="../../${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p> ${item.description} </p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition"> ${item.nutrition} </p>
              </div>
               <!--Edit and Delete are only for creator-->
        ${hasOwner ? html`
            <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
          </div>` : ''}  
            </div>
        </div>
      </section>
`;

export async function showDetailsView(ctx) {
    let id = ctx.params.id;
    let data = await getFruitsById(id);
    let hasOwner = isOwner(data._ownerId);
    render(detailsTemp(data, hasOwner));
}

async function onDelete(e) {
    e.preventDefault();
    let isDelete = confirm('Delete fruit?');
    let id = e.target.dataset.id;
    if (!isDelete) {
        return;
    }
    await deleteFruitsById(id);
    page.redirect('/dashboard');
}