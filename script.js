// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {

   const button = document.getElementById("formSubmit");

button.addEventListener('click', function(event){
   event.preventDefault();
})

   button.addEventListener("click", function() {
      const pilotName = document.getElementById("pilotName");
      const copilotName = document.getElementById("copilotName");
      const fuelLevel = document.getElementById("fuelLevel");
      const cargoMass = document.getElementById("cargoMass");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert('all fields are required.');
      }
      if (!isNaN(pilotName.value)){
         alert('Pilot Name has an invalid entery please use letters only');
      }else if (!isNaN(copilotName.value)){
         alert('Copilot Name has an invalid entery please use letters only');
      }else if (isNaN(fuelLevel.value)){
         alert('Fule level has an invalid entery please use numbers only');
      }else if (isNaN(cargoMass.value)){
         alert('Cargo mass has an invalid entery please use numbers only');
      }

      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");

      pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is Ready`;

      const faultyItems = document.getElementById("faultyItems");
      const launchStatus = document.getElementById("launchStatus");

      if (fuelLevel.value < 10000){
         faultyItems.style.visibility = "visible";
         faultyItems.innerHTML = `There is not enough fuel for the journey.`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
      }else if (cargoMass.value > 10000){
         faultyItems.style.visibility = "visible";
         faultyItems.innerHTML = `There is too much mass for the shuttle to take off.`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
      }



   });





   
});

