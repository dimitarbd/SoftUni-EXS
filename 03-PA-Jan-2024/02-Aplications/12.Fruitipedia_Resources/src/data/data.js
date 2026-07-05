import { del, get, post, put } from './request.js';

let endpoints = {
    allFruits: '/data/fruits?sortBy=_createdOn%20desc',
    fruits: '/data/fruits'
};

export async function getAllFruits() {
    return await get(endpoints.allFruits);
}

export async function createFruits(data) {
    return await post(endpoints.fruits, data);
}

export async function getFruitsById(id) {
    return await get(`${endpoints.fruits}/${id}`);
}

export async function deleteFruitsById(id) {
    return await del(`${endpoints.fruits}/${id}`);
}

export async function updateFruits(id, data) {
    return await put(`${endpoints.fruits}/${id}`, data);
}

export async function searchByQuery(query) {
    return await get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}
