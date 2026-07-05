let list = document.getElementById('commits')

function loadCommits() {
    let username = document.getElementById("username").value;
    let repo = document.getElementById("repo").value;

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(onHeaders)
        .then(displayCommits)
        .catch(onError);
}

function onHeaders(responce) {
    if (!responce.ok) {
        throw "Error";
    }

    return responce.json();
}

function displayCommits(data) {
    
    list.replaceChildren(...data.map(createListItem));
}

function onError(error) {
    list.innerHTML=`<li>Error: Not Found</li>`
}

function createListItem({ commit: { author: { name }, message } }) {
    let item = document.createElement('li');
    item.textContent = `${name}: ${message}`

    return item;
}