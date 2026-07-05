import { html, render } from "./node_modules/lit-html/lit-html.js";

let url = "http://localhost:3030/jsonstore/advanced/dropdown";

let root = document.getElementById("menu");
document.querySelector("form").addEventListener("submit", addItem)

onLoad();
async function onLoad() {
    let response = await fetch(url);
    let data = await response.json();
    let  option = Object.values(data).map(op => optionTemp(op));
    update(option)
    } 

    function optionTemp(data) {
        return html`<option values=${data._id}>${data.text}</option>`
    }

function update(data) {
    render(data, root)
}

function addItem(e) {
    e.preventDefault();
    let inputRef = document.getElementById("itemText");

    let text = inputRef.value;
    inputRef.value = ""

    addItemInDb({text})
}

async function addItemInDb(data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    onLoad();
}

