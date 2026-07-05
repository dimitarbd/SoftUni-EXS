function search() {
   let townsList = Array.from(document.querySelectorAll("ul#towns>li"));
   let searchForm = document.getElementById("searchText").value;
   let result = document.getElementById("result");

   let counter = 0;

   for (let town of townsList) {
      let currTown = town.textContent
      if (searchForm && currTown.indexOf(searchForm) >= 0) {
         town.innerHTML = `<bold><u>${currTown}</u></bold>`;
         counter++;
      }
   }
   result.textContent = `${counter} matches found`;
}
