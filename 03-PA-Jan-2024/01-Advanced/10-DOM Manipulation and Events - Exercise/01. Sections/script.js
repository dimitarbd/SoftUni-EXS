function create(words) {
   let contentRef = document.getElementById('content');
   for (let word of words) {
      let divEl = document.createElement("div");
      
      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = 'none'
      divEl.appendChild(pEl);

      divEl.addEventListener("click", clickHandler);

      contentRef.appendChild(divEl)
   }

   function clickHandler (event) {
      let target = event.currentTarget;
      let children = target.children;
      let p = children[0];
      p.style.display = "block"
   }
}