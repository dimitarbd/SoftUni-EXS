import { get } from "./requester.js"

const baseURL = "http://localhost:3030/"

const endPoints = {
    catalog: "data/movies",
    dataLike: "data/likes"
}

async function getAllMovies() {
    return await get(baseURL + endPoints.catalog)
}

async function getSingeMovie(id) {
    return await get(baseURL + endPoints.catalog + "/" + id)
}

async function getLike(id) {
    return await get(baseURL + `data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
}

async function createLike (id) {
    return await post(baseURL + endPoints.dataLike, {"moviesId" :id})
}

export {
    getAllMovies,
    getSingeMovie,
    getLike
}