import { del, get, post, put } from './request.js';

let endpoints = {
    allCyberpunk: '/data/cyberpunk?sortBy=_createdOn%20desc',
    cyberpunk: '/data/cyberpunk'
};

export async function getAllCyberpunk() {
    return await get(endpoints.allCyberpunk);
}

export async function createCyberpunk(data) {
    return await post(endpoints.cyberpunk, data);
}

export async function getCyberpunkById(id) {
    return await get(`${endpoints.cyberpunk}/${id}`);
}

export async function deleteCyberpunkById(id) {
    return await del(`${endpoints.cyberpunk}/${id}`);
}

export async function updateCyberpunk(id, data) {
    return await put(`${endpoints.cyberpunk}/${id}`, data);
}

export async function searchByQuery(query) {
    return await get(`/data/cyberpunk?where=model%20LIKE%20%22${query}%22`);
}
