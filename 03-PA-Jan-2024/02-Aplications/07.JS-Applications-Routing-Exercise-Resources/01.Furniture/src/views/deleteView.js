import { dataService } from "../service/dataService.js";

export async function deleteItem(ctx) {
    let id = ctx.params.id;
    await dataService.delFurniture(id);
    let res = confirm("delete")
    ctx.goTo("/")
}