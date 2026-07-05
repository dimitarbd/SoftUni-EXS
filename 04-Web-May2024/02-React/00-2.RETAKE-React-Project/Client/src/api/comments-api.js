import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (partId, email, text, rating, currentDate) => requester.post(BASE_URL, { email, text, rating, currentDate });

const getAll = async (partId) => {
    const result = await requester.get(BASE_URL);

    const comments = Object.values(result);

    return comments;
}

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;