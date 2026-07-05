function lockedProfile() {
    let btns = Array.from(document.querySelectorAll("button"));

    btns.forEach(x => x.addEventListener("click", onClickHandler));

    function onClickHandler(e) {
        let hiddentInfo = e.currentTarget.parentElement.querySelector("div");
        let currRadioBTN = e.target.parentElement.querySelector("input[type='radio']:checked");

        if (currRadioBTN.value == "unlock") {
            if (e.currentTarget.textContent == "Show more") {
                e.currentTarget.textContent = "Hide it"
                hiddentInfo.style.display = "block"
            } else if (e.currentTarget.textContent == "Hide it") {
            e.currentTarget.textContent = "Show more"
            hiddentInfo.style.display = "none"
        }
    }
}
}