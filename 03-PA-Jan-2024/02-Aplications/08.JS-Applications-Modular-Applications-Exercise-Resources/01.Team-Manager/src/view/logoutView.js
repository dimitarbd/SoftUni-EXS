import { userService } from "../api/userSrevice.js";
import { userHelper } from "../common/userHelper.js";
import { goTo } from "../common/goTo.js";

export async function logoutView() {
    await userService.logout();
    userHelper.clearUserData();
    goTo("/")
}