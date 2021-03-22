// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/

window.addEventListener("load", function() {


   const missionTarget = document.getElementById("missionTarget")
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let random = Math.floor((Math.random() * json.length)+ 0);
   
         missionTarget.innerHTML = 
         `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[Number(random)].name}</li>
            <li>Diameter: ${json[Number(random)].diameter}</li>
            <li>Star: ${json[Number(random)].star}</li>
            <li>Distance from Earth: ${json[Number(random)].distance}</li>
            <li>Number of Moons: ${json[Number(random)].moons}</li>
         </ol>
         <img src="${json[Number(random)].image}">`
   
      });
   
   })
   
      const button = document.getElementById("formSubmit");
   
   button.addEventListener('click', function(event){
      event.preventDefault();
   })
   
      button.addEventListener("click", function() {
         const pilotName = document.getElementById("pilotName");
         const copilotName = document.getElementById("copilotName");
         const fuelLevel = document.getElementById("fuelLevel");
         const cargoMass = document.getElementById("cargoMass");
         const pilotStatus = document.getElementById("pilotStatus");
         const copilotStatus = document.getElementById("copilotStatus");
         const faultyItems = document.getElementById("faultyItems");
         const launchStatus = document.getElementById("launchStatus");
         const fuelStatus = document.getElementById("fuelStatus");
         const cargoStatus = document. getElementById("cargoStatus");
   
         
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert('all fields are required.');
         }
         if (!isNaN(pilotName.value) || pilotName === ""){
            alert('Pilot Name has an invalid entery please use letters only');
         }else if (!isNaN(copilotName.value)){
            alert('Copilot Name has an invalid entery please use letters only');
         }else if (isNaN(fuelLevel.value)){
            alert('Fule level has an invalid entery please use numbers only');
         }else if (isNaN(cargoMass.value)){
            alert('Cargo mass has an invalid entery please use numbers only');
         }
   
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is Ready`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
   
         if (Number(fuelLevel.value) < 10000 || cargoMass.value === ""){
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
         }else if (Number(cargoMass.value) > 10000 || cargoMass.value === ""){
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
         } else if (pilotName.value === "" || copilotName.value === "" || Number(pilotName.value) === 'number'){
            faultyItems.style.visibility = "hidden";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
         }else if (typeof(pilotName.value) === 'string' && typeof(copilotName.value) === 'string' && typeof(Number(fuelLevel.value)) === 'number' && typeof(Number(cargoMass.value)) === 'number'){
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
      }
   
         
   
      });
   
   });