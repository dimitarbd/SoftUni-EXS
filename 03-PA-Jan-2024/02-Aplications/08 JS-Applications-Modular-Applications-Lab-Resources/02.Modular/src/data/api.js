import { clearUserData, getUserData } from "../util.js";

let host = 'http://localhost:3030';

async function request(method, url, data) {
    let options = {
        method, 
        headers: {}
    };

    if (data !=undefined) {
        options.headers['Content-Type'] = 'applicatin/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();
    if(userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        let res = await fetch (host + url, options);

        if(!res.ok) {
            if (res.status == 403) {
                clearUserData();
            }

            let err = await res.json();
            throw new Error(err.message);
        };
        return res.json();
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export let get = (url) => request('get', url);
export let post = (url, data) => request('post', url, data);
export let put = (url, data) => request('put', url, data);
export let del = (url) => request('delete', url);

window.api = {
    get, post, put, del
};
