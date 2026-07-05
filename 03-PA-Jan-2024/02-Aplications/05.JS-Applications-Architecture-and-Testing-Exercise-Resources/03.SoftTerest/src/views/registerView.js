import { register } from "../api/userService.js";
import { setUser } from "../utils/userUtils.js"

const registerSection = document.querySelector("div[data-view-name='register']");
const form = registerSection.querySelector("form").addEventListener("submit", onsubmit);

let context = null
export function showRegisterView(ctx) {
    context = ctx
    context.render(registerSection);
};

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    let { email, password, repeatPassword } = Object.fromEntries(formData);

    if (email.length < 3 || password.length < 3 || password !== repeatPassword) {
        return alert("Register error");
    }

    const userData = await register({email, password});
    setUser(userData);
    context.goTo("/home");
    context.updateNav();
    form.reset();
}