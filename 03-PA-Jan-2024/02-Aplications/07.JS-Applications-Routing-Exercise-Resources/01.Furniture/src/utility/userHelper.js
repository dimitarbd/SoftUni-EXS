function setUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify(userData));
}

function getUserData() {
    return sessionStorage.getItem("userData") && JSON.parse(sessionStorage.getItem("userData"))
}

function clearUserData() {
    sessionStorage.removeItem("userData")
}

function getUserToken() {
    let userData = getUserData();
    return userData?.accessToken;
}

function getUserId() {
    let userData = getUserData();
    return userData?._id;
}

function hasOwner(ownerId) {
    let id = getUserId();
    return ownerId === id;
}

export let userHelper = {
    setUserData, 
    getUserData,
    clearUserData,
    getUserToken,
    getUserId,
    hasOwner
}