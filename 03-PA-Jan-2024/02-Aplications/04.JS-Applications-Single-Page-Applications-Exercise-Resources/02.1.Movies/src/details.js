import { getLike, getSingeMovie } from "./dataService.js";
import { getUserData, getUserId } from "./userHelper.js";

let section = document.getElementById("movie-example");

export async function showDetails(e) {
    e.preventDefault();
    document.querySelectorAll("section").forEach(section => section.style.display = "none");
    document.getElementById("movie-example").style.display = "block";

    let id = e.target.id;
    let data = await getSingeMovie(id);
    const dataLikes = await getLike(id);
    section.innerHTML = "";
    listDetails(data, dataLikes);
};

function listDetails(data, likesCount) {
    let container = document.createElement("div");
    container.classList.add("container");
    
    let isOwner = getUserId() === data._ownerId
    let temp = `
    <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src=${data.img}
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${data.description}
              </p>
    `

    if(isOwner) {
        temp += `
        <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <span class="enrolled-span">Liked ${likesCount}</span>
            </div>
          </div>
        `
    } else {
        temp += `
        <a class="btn btn-danger" href="likeMovie">Delete</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div>
        `
    } 



    container.innerHTML = temp;
    container.addEventListener("click", onAction);
    section.appendChild(container)
}

function onAction(e) {

}
