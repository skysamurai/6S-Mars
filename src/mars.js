const mySpacecraft = new Spacecraft('Odyssey', 'Hydrogen');
const myMarsRover = new MarsRover('Curiosity', 'Advanced GPS');
const missionControl = new MissionControl('Mars Exploration', '2023-09-30', mySpacecraft, myMarsRover);

function Spacecraft(name, fueltype) {
  this.name = name;
  this.fueltype = fueltype;
  this.fuelLevel = 100;
  this.isInSpace = false;

  this.launch = function() {
    if (this.fuelLevel === 100) {
      console.log(`Корабль ${this.name} полностью заправлен и готов к запуску в космос!`);
      console.log(`Начинаем отсчет`);
      for (let sec = 10; sec > 0; sec--) {console.log(sec)};
      this.fuelLevel -= 10;
      console.log(`Корабль ${this.name} успешно покинул космопорт!`);
      this.isInSpace = true;
    } else if (this.isInSpace === false) {
      console.log(`У корабля ${this.name} баки заправлены на ${this.fuelLevel}%, требуется заправка`)
    } else {
      console.log(`Корабль ${this.name} находится в космосе!`);
    }
  }
  
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
