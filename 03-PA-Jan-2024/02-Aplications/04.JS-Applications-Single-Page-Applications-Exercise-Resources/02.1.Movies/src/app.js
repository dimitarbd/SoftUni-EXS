import { showRegisterView } from "./register.js"
import { showHome } from "./home.js"
import { getUserData } from "./userHelper.js";
import { showLogin } from "./login.js";
import { showLogout } from "./loguot.js";


document.querySelectorAll("section").forEach(section => section.style.display = "none");
document.querySelector("nav").addEventListener("click", onNavigate);

let userMSG = document.getElementById("welcome-msg");
let userNav = document.querySelectorAll("li.user");
let guestNav = document.querySelectorAll("li.guest");


const routes = {
    "/": showHome,
    "/home": showHome,
    "/register": showRegisterView,
    "/login": showLogin,
    "/logout": showLogout,
    "/addMovie": () => console.log("add"),
    "/details/:id": () => console.log("add"),
}

export function onNavigate(e) {
    if (e.target.tagName !== "A" || !e.target.href) {
        return;
    }
    e.preventDefault();
    let url = new URL(e.target.href);
    let path = url.pathname;
    routes[path]();
}

export function updateNav() {
    const userData = getUserData();
    if (userData) {
        userNav.forEach(li => {
            li.style.display = "block"
        })
        
        guestNav.forEach(li => {
            li.style.display = "none"
        })
        userMSG.textContent = `Welcome, ${userData.email}`
        
    } else {
        userNav.forEach(li => {
            li.style.display = "none"
        })
        
        guestNav.forEach(li => {
            li.style.display = "block"
        })
        userMSG.textContent = "";
    }
}

updateNav();
showHome();