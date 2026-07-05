import { render, html, page } from "../lib.js";

export const paginator = (page, pages) => {
    let pageLinks = (new Array(pages).fill(0));

    return html`
        <div>
            <div></div>
            <div>
                ${page > 1 ? html`<a href="?page=${page - 1}">&lt; Previus</a>` : null}    
                ${pageLinks.map((_, i) => pageIndex(i + 1, page)}
                ${page < pages ? html`<a href="?page=${page + 1}">Next&lt;</a>` : null}
            </div>
        </div>
`;
}

let pageIndex = (index, page) => index == page ?
    html`<span></span>`
html`<a href="?page=${index}">${index}</a>`;