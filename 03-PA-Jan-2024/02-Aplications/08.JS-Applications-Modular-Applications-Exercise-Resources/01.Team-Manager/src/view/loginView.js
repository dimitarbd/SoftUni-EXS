import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../common/render.js";
import { userService } from "../api/userSrevice.js";
import { userHelper } from "../common/userHelper.js";
import { goTo } from "../common/goTo.js";

let loginTemp = (hasErr) => html `
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onsubmit} id="login-form" class="main-form pad-large">
        ${hasErr ? html`<div class="error">${hasErr}</div>` : ""}            
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>
`;

export function showLoginView() {
    renderer(loginTemp());
}

async function onsubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let { email, password } = Object.fromEntries(formData);
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g;

    if(!pattern.test(email)) {
        return renderer(loginTemp("Oops Invalid email"));
    }

    if( password.length <3 ) {
        return renderer(loginTemp("Oops Invalid user or password"));
    }

    let userData = await userService.login({ email, password });
    userHelper.setUserData(userData);
    goTo("/my-team")
}
