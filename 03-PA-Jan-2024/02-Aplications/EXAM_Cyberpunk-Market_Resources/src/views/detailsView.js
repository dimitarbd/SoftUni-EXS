import { deleteCyberpunkById, getCyberpunkById} from '../data/data.js';
import { html, page, render } from '../lib.js';
import { isOwner } from '../util.js';


let detailsTemp = (item, hasOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src="../../${item.imageUrl}" alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">
                ${item.description}
                </p>
              </div>
              <!--Edit and Delete are only for creator-->
            
              ${hasOwner ? html`
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
              </div>` : '' }
            </div>
          </div>
        </section>
`;

export async function showDetailsView(ctx) {
    let id = ctx.params.id;
    let data = await getCyberpunkById(id);
    let hasOwner = isOwner(data._ownerId);
    render(detailsTemp(data, hasOwner));
}

async function onDelete(e) {
    e.preventDefault();
    let isDelete = confirm('Delete sell?');
    let id = e.target.dataset.id;
    if (!isDelete) {
        return;
    }
    await deleteCyberpunkById(id);
    page.redirect('/dashboard');
}