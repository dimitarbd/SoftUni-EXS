function notify(message) {
  let divEl = document.getElementById("notification");
 
  let msg = document.createElement("p");
      msg.textContent = message;
      divEl.appendChild(msg);
      divEl.style.display = 'block'

  divEl.addEventListener("click", hideDiv);
  

  function hideDiv() {
    divEl.style.display = 'none';
    msg.textContent = ""
  }
 
}

