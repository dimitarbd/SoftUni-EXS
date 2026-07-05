import { createFruits } from '../data/data.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let createTemplate = (handler) => html`
        <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${handler}>
              <input type="text" name="name" id="name" placeholder="Fruit Name"/>
              <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image"/>
              <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
`;

export function showCreateView(){
    let handler = createSubmitHandler(onSubmit);

    render(createTemplate(handler));
}

async function onSubmit(data, form) {
    let { name, imageUrl, description, nutrition } = data;

    if (!name || !imageUrl || !description || !nutrition) {
        return alert('All fields are required!');
    }

    await createFruits(data);
    page.redirect('/dashboard');

}
