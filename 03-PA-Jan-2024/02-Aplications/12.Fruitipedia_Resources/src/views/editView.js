import { getFruitsById, updateFruits } from '../data/data.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';


let editTemplate = (item, handler) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form" @submit=${handler} data-id=${item._id} >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value="${item.name}"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value="${item.imageUrl}"
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value="${item.description}"
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value="${item.nutrition}"
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function showEditView(ctx) {
    let id = ctx.params.id;
    let handler = createSubmitHandler(onEdit);
    let data= await getFruitsById(id);
    render(editTemplate(data, handler));
};

async function onEdit(data, form) {
    let id = form.dataset.id;
    let { name, imageUrl, description, nutrition } = data;

    if (!name || !imageUrl || !description || !nutrition) {
        return alert('All fields are required!');
    }

    await updateFruits(id, data);
    page.redirect(`/details/${id}`);

}