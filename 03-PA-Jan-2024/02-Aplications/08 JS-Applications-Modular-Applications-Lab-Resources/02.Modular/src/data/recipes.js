import { get, post } from "./api.js";

let pageSize = 5;

export async function getRecipes(search, page) {
    let url = "/data/recipes";
    let countUrl = '/data/recipes?count';

    if (search) {
        url += '?where=' + encodeURIComponent(`name LIKE "${search}"`);
    } else if (page) {
        url += `?offset=${(page - 1) * pageSize}&pageSize=${pageSize}`;
    }

    let [recipes, count] = await Promise.all([
        get(url),
        get(countUrl)
    ])

    return {
        recipes,
        pages: Math.ceil(count / pageSize)
    };
}