import { userHelper } from "./userHelper.js";


async function requester(method, url, data) {
    let option = {
        method,
        headers: {}
    }

    let accessToken = userHelper.getUserToken();

    if (accessToken) {
        option.headers["x-authorization"] = accessToken;
    }

    if (data) {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    try {
        let response = await (fetch(url, option));
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        if (!response.status == 204) {
            return response
        }

        return await response.json();

    } catch (error) {
        alert(error);
        throw new Error(error);
    };
}

async function get(url) {
    return requester("GET", url)
}

async function post(url, data) {
    return requester("POST", url, data)
}

async function put(url, data) {
    return requester("PUT", url, data)
}

async function del(url) {
    return requester("DELETE", url)
}

export let api = {
    get,
    put,
    post,
    del
}