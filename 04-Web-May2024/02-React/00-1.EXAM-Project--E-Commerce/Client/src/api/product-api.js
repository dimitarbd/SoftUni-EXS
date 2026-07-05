import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/products';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);
    

    return products;
};

export const getOne = (productId) => request.get(`${BASE_URL}/${productId}`);


const productsAPI = {
    getAll,
    getOne
};

export default productsAPI;