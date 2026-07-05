import { getAllMotorcycles } from '../data/data.js';
import { html, page, render } from '../lib.js';

let dashboardTemplate = (data) => html`
<h2>Available Motorcycles</h2>
        ${data.length  ? dashboardDataTemplate(data) : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>` }
         <!-- Display an h2 if there are no posts -->
`;

let dashboardDataTemplate = (data) => html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${data.map(item => cardTemplate(item))}
          
        </section>
`;

let cardTemplate = (item) => html`
        <div class="motorcycle">
            <img src="../../${item.imageUrl}" alt="example1" />
            <h3 class="model">${item.model}</h3>
            <p class="year">Year: ${item.year}</p>
            <p class="mileage">Mileage: ${item.mileage}</p>
            <p class="contact">Contact Number: ${item.contact}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
        </div>
`;

export async function showDashboardView() {
    let data = await getAllMotorcycles();
    //debugger;
    render(dashboardTemplate(data));
}