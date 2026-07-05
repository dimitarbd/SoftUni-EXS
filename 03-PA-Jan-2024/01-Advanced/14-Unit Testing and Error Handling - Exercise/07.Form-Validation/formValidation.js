function validate() {
    let submitBtn = document.getElementById("submit");
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pasword").value;
    let confPassword = document.getElementById("confirm-password").value;
    let company = document.getElementById("company");
    
    submitBtn.addEventListener("click", onclickHandler);

    function onclickHandler() {
        let email = e.target.value;
        let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/g;

        if(pattern.test(email)) {
            e.target.classList.remove("error");
        } else { 
            e.target.classList.add("error");
        }

    }
}
