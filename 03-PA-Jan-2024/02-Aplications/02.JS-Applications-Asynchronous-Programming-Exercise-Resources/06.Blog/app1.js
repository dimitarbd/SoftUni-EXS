function attachEvents() {
    document.getElementById("btnLoadPosts").addEventListener("click", loadPost);
    document.getElementById("btnViewPost").addEventListener("click", viewPost);
    
    const selectRef = document.getElementById("posts");
    const postTitleRef = document.getElementById("post-title");
    const postBodyRef = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");

    const endPoits = {
        allPost: "http://localhost:3030/jsonstore/blog/posts",
        allComments: "http://localhost:3030/jsonstore/blog/comments"
    };

    async function loadPost(e) {
        const response = await fetch(endPoits.allPost);
        const data = await response.json();
        selectRef.innerHTML = "";

        Object.values(data).forEach(post => {
            selectRef.innerHTML += createOptionElement(post);
        })
    }

    function createOptionElement(data) {
        return `<option value=${data.id}>${data.title}</option>`
    }

    async function viewPost(e) {
        const currentPostId= selectRef.selectedOptions[0].value;
        const responseSinglePost = await fetch(endPoits.allPost);
        const dataSinglePost = await responseSinglePost.json();

        const currentPost = Object.values(dataSinglePost).find(x => x.id == currentPostId);

        const responseComments = await fetch(endPoits.allComments);
        const dataComments = await responseComments.json();

        const filteredComments = Object.values(dataComments).filter(x => x.postId == currentPostId);
        postTitleRef.textContent = currentPost.title;
        postBodyRef.textContent = currentPost.body;

        postComments.innerHTML = "";
        filteredComments.forEach(c => {
            const li = document.createElement("li");
            li.id = c.id;
            li.textContent = c.text;
            postComments.appendChild(li)
        })
        
    }

}

attachEvents();