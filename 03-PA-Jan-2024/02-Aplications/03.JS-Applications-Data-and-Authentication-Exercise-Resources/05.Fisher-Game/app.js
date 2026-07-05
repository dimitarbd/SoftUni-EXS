document.querySelector("a[id='home']").classList.add("active");
document.getElementById("logout").addEventListener("click", onLogout);
document.querySelector(".load").addEventListener("click", onLoadCatch);
document.getElementById("addForm").addEventListener("submit", onCreate);


const endpoints = {
    logout: "http://localhost:3030/users/logout",
    catches: "http://localhost:3030/data/catches"
}

const userNavRef = document.getElementById("user");
const guestNavRef = document.getElementById("guest");
const addBtnRef = document.querySelector(".add");
const catchesContainerRef = document.getElementById("catches");

let userData = JSON.parse(sessionStorage.getItem("userData"));

function hasOwner(id) {
    return userData?._id == id
}

updateNav();
function updateNav() {
    if (userData) {
        document.querySelector("nav p span").textContent = userData.email;
        userNavRef.style.display = "inline-block";
        guestNavRef.style.display = "none";
        addBtnRef.disabled = false;
        // document.querySelector("a[id='login']").style.display = "none";
        // document.querySelector("a[id='register']").style.display = "none";
        // document.querySelector("a[id='logout']").style.display = "inline-block";
    } else {
        document.querySelector("nav p span").textContent = "guest";
        userNavRef.style.display = "none";
        guestNavRef.style.display = "inline-block";
        addBtnRef.disabled = true;

        // document.querySelector("a[id='login']").style.display = "inline-block";
        // document.querySelector("a[id='register']").style.display = "inline-block";
        // document.querySelector("a[id='logout']").style.display = "none";
    }
}

async function onLogout(e) {
    let option = {
        method: "GET",
        header: {
            "X-Authorization": userData.accesToken
        }
    }
    await fetch(endpoints.logout, option);
    sessionStorage.clear();
    userData = null;
    await onLoadCatch();
    updateNav();
}

async function onLoadCatch() {
    const response = await fetch(endpoints.catches);
    const data = await response.json();
    catchesContainerRef.innerHTML = "";

    data.forEach(x => {
        let div = listCatches(x);
        catchesContainerRef.appendChild(div);
    });

}

function listCatches(data) {
    let isOwner = hasOwner(data._ownerId)
    let div = document.createElement("div");
    div.classList.add("catch");

    div.innerHTML += `<label>Angler</label>`
    div.innerHTML += `<input type="text" class="angler" ${!isOwner ? "disabled" : ""} value="${data.angler}">`
    div.innerHTML += `<label>Weight</label>`
    div.innerHTML += `<<input type="text" class="weight" ${!isOwner ? "disabled" : ""} value="${data.weight}">>`
    div.innerHTML += `<label>Species</label>`
    div.innerHTML += `<input type="text" class="species" ${!isOwner ? "disabled" : ""} value="${data.species}">`
    div.innerHTML += `<label>Location</label>`
    div.innerHTML += `<input type="text" class="location" ${!isOwner ? "disabled" : ""} value="${data.location}">`
    div.innerHTML += `<label>Bait</label>`
    div.innerHTML += `<input type="text" class="bait" ${!isOwner ? "disabled" : ""} value="${data.bait}">`
    div.innerHTML += `<label>Capture Time</label>`
    div.innerHTML += `<input type="number" class="captureTime" ${!isOwner ? "disabled" : ""} value="${data.captureTime}">`

    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update");
    updateBtn.dataset.id = data._id;
    updateBtn.textContent = "Update"

    const delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.dataset.id = data._id;
    delBtn.textContent = "Delete"

    if (hasOwner(data._id)) {
        updateBtn.disabled = true;
        delBtn.disabled = true;
    }

    div.appendChild(updateBtn);
    div.appendChild(delBtn);

    updateBtn.addEventListener("click", onUpdate);
    delBtn.addEventListener("click", onDelete);

    return div;
}

async function onCreate(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let angler = formData.get("angler");
    let weight = formData.get("weight");
    let species = formData.get("species");
    let location = formData.get("location");
    let bait = formData.get("bait");
    let captureTime = formData.get("captureTime");
    let _ownerId = userData._id;


    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return
    }

    let data = {
        angler, 
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId

    }

    const option = createOption("POST", data);

    await fetch(endpoints.catches, option);
    onLogout();

}

function onUpdate(e) {

}

async function onDelete(e) {
    const id = e.target.dataset.id;
    let option = {
        method: "DELETE",
        headers: {
            "X-Authorization": userData.accesToken
        }
    }

    await fetch(endpoints.catches + "/" + id, option);
    onLoadCatch();

}

function createOption(method, data) {
    return {
        method,
        headers: {
            "Content-type": "aplication/json",
            "X-Authorization": userData.accesToken
        },
        body: JSON.stringify(data)
    }
}
