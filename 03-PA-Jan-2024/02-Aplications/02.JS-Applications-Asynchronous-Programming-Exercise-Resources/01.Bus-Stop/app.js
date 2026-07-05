async function getInfo() {
   let stopIdRef = document.getElementById('stopId');
   let stopId = stopIdRef.value;
   let stopNameRef = document.getElementById('stopName');
   let busesRef = document.getElementById('buses');

   stopNameRef.textContent = "";
   busesRef.innerHTML = "";

   const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

   try {
       const response = await fetch(url);
       let data = await response.json();
       stopNameRef.textContent= data.name;
       appendChild(Object.entries(data.buses));
   } catch (error) {
    stopNameRef.textContent = `${error}`
   }

   function appendChild(data) {
    for ([bus, time] of data) {
        let li = document.createElement("li");
        li.textContent = `Bus ${bus} arrives in ${time} minutes`;
        busesRef.appendChild(li);
    }
   }

}