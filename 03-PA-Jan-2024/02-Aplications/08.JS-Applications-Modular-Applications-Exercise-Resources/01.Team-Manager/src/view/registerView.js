import { html } from "../../node_modules/lit-html/lit-html.js";
import { renderer } from "../common/render.js";
import { userService } from "../api/userSrevice.js";
import { userHelper } from "../common/userHelper.js";
import { goTo } from "../common/goTo.js";

let registerTemp = (hasErr) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onsubmit} id="register-form" class="main-form pad-large">
            ${hasErr ? html`<div class="error">${hasErr}</div>` : ""}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`;

export function showRegisterView() {
    renderer(registerTemp());
}

async function onsubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let { username, email, password, repass } = Object.fromEntries(formData);
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g;

    if(!pattern.test(email)) {
        return renderer(registerTemp("Invalid email"));
    }

    if(username.length < 3 || password.length <3 || password !== repass) {
        return renderer(registerTemp("Invalid user or password"));
    }

    let userData = await userService.register({ username, email, password });
    userHelper.setUserData(userData);
    goTo("/my-team")
}