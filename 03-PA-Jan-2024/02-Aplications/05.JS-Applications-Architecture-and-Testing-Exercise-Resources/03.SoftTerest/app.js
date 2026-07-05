import { logout } from "./src/api/userService.js";
import { hasUser, removeUser } from "./src/utils/userUtils.js";
import { showCreateView } from "./src/views/createView.js";
import { showDashboardView } from "./src/views/dashboardView.js";
import { showDetaiView } from "./src/views/detailsView.js";
import { showHomeView } from "./src/views/homeView.js";
import { showLoginView } from "./src/views/loginView.js";
import { showRegisterView } from "./src/views/registerView.js";

document.querySelectorAll("div[data-selection='section']").forEach(div => div.remove());

const main = document.querySelector("main")
const nav = document.querySelector("nav");
nav.addEventListener("click", onNavigate);
updateNav();

const routes = {
    "/": showHomeView,
    "/home": showHomeView,
    "/dashboard": showDashboardView,
    "/create": showCreateView,
    "/login": showLoginView,
    "/register": showRegisterView,
    "/details": showDetaiView,
    "/logout": async () =>{
        await logout();
        removeUser();
        updateNav();
        goTo("/");
    },
    "*": () => console.error("404 Page not found"),
}

function updateNav() {
    const user = hasUser();
    let guestAn = document.querySelectorAll("a[data-permission='guest']");
    let userAn = document.querySelectorAll("a[data-permission='user']");

    if (user) {
        guestAn.forEach(a => a.style.display = "none");
        userAn.forEach(a => a.style.display = "block");
    } else {
        guestAn.forEach(a => a.style.display = "block");
        userAn.forEach(a => a.style.display = "none");
    }
}

function renderer(view) {
    main.replaceChildren(view)
}

function onNavigate(e) {
    e.preventDefault();
    let element = e.target;
    if (e.target.tagName !== "A" && e.target.tagName !== "IMG") {
        return
    }

    if (e.target.tagName == "IMG") {
        element = e.target.parentElement;
    }

    let viewName = new URL(element.href).pathname;
    goTo(viewName)
}

let ctx = {
    render: renderer,
    goTo,
    updateNav
};

function goTo(name, ...params) {
const handler = routes[name];
if (typeof(handler) !== "function") {
    return routes["*"]();
}
    handler(ctx, params);
}

goTo("/")