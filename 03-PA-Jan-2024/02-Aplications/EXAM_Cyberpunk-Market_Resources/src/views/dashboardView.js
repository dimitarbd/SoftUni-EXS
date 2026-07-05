import { getAllCyberpunk } from '../data/data.js';
import { html, page, render } from '../lib.js';

let dashboardTemplate = (data) => html`
    <h3 class="heading">Market</h3>
    
    ${data.length  ? dashboardDataTemplate(data) : html`<h3 class="empty">No Items Yet</h3>` }
                
`;

let dashboardDataTemplate = (data) => html`
        <section id="dashboard">
          
          ${data.map(item => cardTemplate(item))}
          
        </section>
`;

let cardTemplate = (item) => html`
        <div class="item">
            <img src="../../${item.imageUrl}" alt="example1" />
            <h3 class="model">${item.item}</h3>
            <div class="item-info">
              <p class="price">Price: €${item.price}</p>
              <p class="availability">${item.availability}</p>
              <p class="type">Type: ${item.type}</p>
            </div>
            <a class="details-btn" href="/details/${item._id}">Uncover More</a>
        </div>
`;

export async function showDashboardView() {
    let data = await getAllCyberpunk();
    // debugger;
    render(dashboardTemplate(data));
}