import { getAllFruits } from '../data/data.js';
import { html, page, render } from '../lib.js';

let dashboardTemplate = (data) => html`
   <h2>Fruits</h2>
        ${data.length ? dashboardDataTemplate(data) : html`<h2>No fruit info yet.</h2>`}
        
         <!-- Display an h2 if there are no posts -->
         
`;

let dashboardDataTemplate = (data) => html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${data.map(item => cardTemplate(item))}
        </section>
`;

let cardTemplate = (item) => html`
        <div class="fruit">
            <img src="../../${item.imageUrl}" alt="example1" />
            <h3 class="title">${item.name}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>
`;

export async function showDashboardView() {
    let data = await getAllFruits();
    // debugger;
    render(dashboardTemplate(data));
}