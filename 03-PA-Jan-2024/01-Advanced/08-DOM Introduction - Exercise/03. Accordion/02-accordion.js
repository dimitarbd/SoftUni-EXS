function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let textInfo = document.getElementById("extra");
 
        if (button.textContent == "More") {
            textInfo.style.display = "block"
            button.textContent = "Less"
        } else if (button.textContent == "Less") {
            textInfo.style.display = "none";
            button.textContent = "More";
        } 
    
}

// function toggle() {
//     let button = document.getElementsByClassName("button")[0];
//     let textInfo = document.getElementById("extra");

//     button.addEventListener("click", evenHandler);

//     function evenHandler() {
//         console.log('test');
//         if (button.textContent == "Less") {
//             textInfo.style.display = "none";
//             button.textContent = "More";
//         } else if (button.textContent == "More") {
//             textInfo.style.display = "block"
//             button.textContent = "Less"

//         }
//     }
// }