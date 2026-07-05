import { showError } from '../data/error.js';
import { login } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';

let loginTemplate = (onLogin) => html`
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function showLoginView(ctx) {
    render(loginTemplate(createSubmitHandler(onLogin)));
}

async function onLogin(data, form) {
    let { email, password } = data;
    
    if (!email || !password) {
        return showError ('Missing email or password');
    }

    await login(email, password);
    updateNav();
    page.redirect('/');
}