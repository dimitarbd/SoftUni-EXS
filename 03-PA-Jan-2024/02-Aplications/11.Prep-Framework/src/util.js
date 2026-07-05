export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData(data) {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

// TODO Add custom validation
export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        let formData = new FormData(event.target);
        let data = [... formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    };
}