import { getCyberpunkById, updateCyberpunk } from '../data/data.js';
import { showError } from '../data/error.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';


let editTemplate = (item, handler) => html`
    <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit=${handler} data-id=${item._id}>
              <input type="text" 
                name="item" 
                id="item" 
                placeholder="Item"
                .value="${item.item}" 
              />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                .value="${item.imageUrl}"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value="${item.price}"
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                .value="${item.availability}"
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value="${item.type}"
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
                .value="${item.description}"
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function showEditView(ctx) {
    let id = ctx.params.id;
    let handler = createSubmitHandler(onEdit);
    let data= await getCyberpunkById(id);
    render(editTemplate(data, handler));
};

async function onEdit(data, form) {
    let id = form.dataset.id;
    let { item, imageUrl, price, availability, type, description } = data;

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        return showError('All fields are required!');
    }

    await updateCyberpunk(id, data);
    page.redirect(`/details/${id}`);

}