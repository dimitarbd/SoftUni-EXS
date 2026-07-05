import { searchByQuery } from '../data/data.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let searchTemplate = (handler, result) => html`
    <section id="search">

        <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${handler}>
            <input
            type="text"
            name="search"
            id="search-input"
            />
            <button class="button-list">Search</button>
        </form>
        </div>
        <h4>Results:</h4>
        ${result ? showResultTemplate(result) : ''}
        
    </section>
`;

let showResultTemplate = (result) => html`
    <div class="search-result">
        
        ${result.length ? result.map( x => html`
        <div class="fruit">
        <img src="${x.imageUrl}" alt="example1" />
        <h3 class="title">${x.name}</h3>
        <p class="description">${x.description}</p>
        <a class="details-btn" href="/details/${x._id}">More Info</a>
        </div>
        `) : html`<p class="no-result">No result.</p>`}
    </div>
`;

export function showSearchView() {
    let handler = createSubmitHandler(onSearch);
    render(searchTemplate(handler));
}

async function onSearch(data, form) {
    let {search} = data;
    if(!search) {
        return alert('Please enter keyword!');
    }
    let result = await searchByQuery(search);
    let handler = createSubmitHandler(onSearch);
    render(searchTemplate(handler, result));
}