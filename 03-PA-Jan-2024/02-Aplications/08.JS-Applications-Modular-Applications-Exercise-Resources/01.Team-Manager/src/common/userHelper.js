function setUserData(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

function getUserData(data) {
    return JSON.parse(sessionStorage.getItem("userData", JSON.stringify(data)));
}

function getUserId() {
    return getUserData()?._id
}

function getToken() {
    return getUserData()?.accessToken
}

function clearUserData() {
    sessionStorage.removeItem("userData")
}

function hasOwner(itemOwnerId) {
    return getUserId() === itemOwnerId;
}

export let userHelper = {
    setUserData,
    getUserData,
    getUserId,
    getToken,
    clearUserData,
    hasOwner
}