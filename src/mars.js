const mySpacecraft = new Spacecraft('Odyssey', 'Hydrogen');
const myMarsRover = new MarsRover('Curiosity', 'Advanced GPS');
const missionControl = new MissionControl('Mars Exploration', '2023-09-30', mySpacecraft, myMarsRover);

function Spacecraft(name, fueltype) {
  this.name = name;
  this.fueltype = fueltype;
  this.fuelLevel = 100;
  this.isInSpace = false;

  this.launch(){};
  this.land(destination){};
  this.checkFuel(){};
  this.refuel(amount){};
}

function MarsRover(model, navigationSystem) {
  this.model = model;
  this.navigationSystem = navigationSystem;
  this.dataCollected = [];

  this.move(direction){};
  this.collectData(dataType){};
  this.sendDataToEarth(){};
}
function MissionControl(missionName, launchDate) {
  this.missionName = missionName;
  this.launchDate = launchDate;
  this.spacecraft;
  this.marsRover;

  this.initiateLaunch(){};
  this.deployMarsRover(){};
  this.coordinateMission(){};
  this.monitorMissionProgress(){};
}