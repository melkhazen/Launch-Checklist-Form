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
      const pilotName = document.getElementById("pilotName")
      const copilotName = document.getElementById("copilotName")
      const fuelLevel = document.getElementById("fuelLevel")
      const cargoMass = document.getElementById("cargoMass")
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert('all fields are required.');
      }
      if (!isNaN(pilotName.value)){
         alert('Pilot Name has an invalid entery please use letters only')
      }else if (!isNaN(copilotName.value)){
         alert('Copilot Name has an invalid entery please use letters only')
      }else if (isNaN(fuelLevel.value)){
         alert('Fule level has an invalid entery please use numbers only')
      }else if (isNaN(cargoMass.value)){
         alert('Cargo mass has an invalid entery please use numbers only')
      }

   });

   
});

