import page from "../node_modules/page/page.mjs";
import { showBrowseTeamView } from "./view/browseTeamView.js";
import { showDetailsView } from "./view/detailsView.js";
import { showHomeView } from "./view/homeView.js";
import { showLoginView } from "./view/loginView.js";
import { logoutView } from "./view/logoutView.js";
import { showRegisterView } from "./view/registerView.js";


page("/", showHomeView);
page("/home", showHomeView);
page("/browse-team", showBrowseTeamView);
page("/login", showLoginView);
page("/register", showRegisterView);
page("/my-team", ()=> console.error("my-team"));
page("/logout", logoutView);
page("/create", ()=> console.error("create"));
page("/details/:id", showDetailsView);


page.start();