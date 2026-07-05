import { del, get, post, put } from './request.js';

let endpoints = {
    allMotorcycles: '/data/motorcycles?sortBy=_createdOn%20desc',
    motorcycle: '/data/motorcycles'
};

export async function getAllMotorcycles() {
    return await get(endpoints.allMotorcycles);
}

export async function createMotorcycle(data) {
    return await post(endpoints.motorcycle, data);
}

export async function getMotorcycleById(id) {
    return await get(`${endpoints.motorcycle}/${id}`);
}

export async function deleteMotorcycleById(id) {
    return await del(`${endpoints.motorcycle}/${id}`);
}

export async function updateMotorcycle(id, data) {
    return await put(`${endpoints.motorcycle}/${id}`, data);
}

export async function searchByQuery(query) {
    return await get(`/data/motorcycles?where=model%20LIKE%20%22${query}%22`);
}
