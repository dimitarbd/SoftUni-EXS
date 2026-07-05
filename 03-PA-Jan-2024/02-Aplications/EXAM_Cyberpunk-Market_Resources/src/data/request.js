import { clearUserData, getUserData } from '../util.js';
import { showError } from './error.js';

let host = 'http://localhost:3030';

async function request(method, url, data) {
    let options = {
        method, 
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        let response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }

            let err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        // setTimeout(() => {
        //     if (!err.handled) {
        //         alert(err.message);
        //     }
        // }, 3000);
        // throw err;

        // TODO Add custom error handling and visualization based on exam requirments
        showError (err.message);
        
    }
}



export let get = (url) => request('GET', url);
export let post = (url, data) => request('POST', url, data);
export let put = (url, data) => request('PUT', url, data);
export let del = (url) => request('DELETE', url);