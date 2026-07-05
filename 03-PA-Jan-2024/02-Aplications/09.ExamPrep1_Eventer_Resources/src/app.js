import { page } from './lib.js';
import { updateNav } from './util.js';
import { logout } from './data/users.js';
import { showCatalog } from './views/catalog.js';
import { showCreateView } from './views/create.js';
import { showDetailsView } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showEditView } from './views/edit.js';


updateNav();

page('/', showHome);
page('/catalog', showCatalog);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreateView);
page('/catalog/:id', showDetailsView);
page('/edit/:id', showEditView);



page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');
});