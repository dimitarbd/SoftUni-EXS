import { searchByQuery } from '../data/data.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let searchTemplate = (handler, result) => html`
        <section id="search">

            <div class="form">
            <h4>Search</h4>
            <form class="search-form" @submit=${handler}>
                <input type="text"
                name="search"
                id="search-input"
                />
                <button class="button-list">Search</button>
            </form>
            </div>
            <h4 id="result-heading">Results:</h4>
            ${result ? showResultTemplate(result) : ''}
            
        </section>
`;

let showResultTemplate = (result) => html`
    <div class="search-result">

    ${result.length ? result.map( x => html`
        <div class="motorcycle">
            <img src="${x.imageUrl}" alt="example1" />
            <h3 class="model">${x.model}</h3>
            <a class="details-btn" href="/details/${x._id}">More Info</a>
        </div>`) : html`<h2 class="no-avaliable">No result.</h2>`}

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