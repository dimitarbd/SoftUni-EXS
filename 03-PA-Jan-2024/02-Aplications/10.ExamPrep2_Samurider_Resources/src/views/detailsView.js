import { deleteMotorcycleById, getMotorcycleById} from '../data/data.js';
import { html, page, render } from '../lib.js';
import { isOwner } from '../util.js';


let detailsTemp = (item, hasOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="../../${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${item.year}</p>
                <p class="mileage">Mileage: ${item.mileage}</p>
                <p class="contact">Contact Number: ${item.contact}</p>
                   <p id = "motorcycle-description">
                   ${item.about}
                        </p>
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
    let data = await getMotorcycleById(id);
    let hasOwner = isOwner(data._ownerId);
    render(detailsTemp(data, hasOwner));
}

async function onDelete(e) {
    e.preventDefault();
    let isDelete = confirm('Delete motor?');
    let id = e.target.dataset.id;
    if (!isDelete) {
        return;
    }
    await deleteMotorcycleById(id);
    page.redirect('/dashboard');
}