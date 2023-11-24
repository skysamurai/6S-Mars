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
  };

  this.land = function(destination) {
    console.log(`Экипажу ${this.name} подготовиться к посадке на ${destination}.`);
    this.fuelLevel -= 10;
    this.isInSpace = false;
    console.log(`Поздравляем с успешной посадкой на ${destination}.`);
    };
  
  this.checkFuel = function(){
    console.log(`Текущий уровень топлива корабля ${this.name} составляет ${this.fuelLevel}`)
  };

  this.refuel = function(amount) {
    this.fuelLevel += amount
    if (this.fuelLevel > 100) {
      console.log(`Баки корабля ${this.name} не вместят данный объем топлива.`);
      console.log(`Корабль полностью заправлен. ${this.fuelLevel - 100} топлива возвращено в порт.`);
      this.fuelLevel = 100;
    } else if (this.fuelLevel < 100) {
      console.log(`Корабль заправлен на ${this.fuelLevel}%, для отправления требуется дозаправка.`)
    } else {
      console.log(`Корабль полностью заправлен.`);
    }
  }
}

function MarsRover(model, navigationSystem) {
  this.model = model;
  this.navigationSystem = navigationSystem;
  this.dataCollected = [];

  this.move = function(direction) {
    console.log(`Марсоход ${this.model} отправлен в направлении ${direction}.`);
  };
  this.collectData = function(dataType) { 
    console.log(`Марсоход ${this.model} собирает данные формата ${dataType}.`);
    this.dataCollected.push(dataType);
  };
  this.sendDataToEarth = function() {
    console.log(`Данные с марсохода ${this.model} отправлены на Землю. База данных очищена.`);
    this.dataCollected = [];
  };
}

function MissionControl(missionName, launchDate, spacecraft, marsRover) {
  this.missionName = missionName;
  this.launchDate = launchDate;
  this.spacecraft = spacecraft;
  this.marsRover = marsRover;

  this.initiateLaunch = function() {
    this.spacecraft.launch();
  }
  this.deployMarsRover = function() {
    this.marsRover.move('поверхность Марса');

  }
  this.coordinateMission = function() {
    console.log(`Миссия ${this.missionName} началась...`);
    console.log(`Марсоход ${this.marsRover.model} начинает сбор данных.`);
    this.marsRover.collectData('Photo');
    this.marsRover.collectData('Temperature');
    this.marsRover.collectData('Air composition');
    this.marsRover.sendDataToEarth();
  }

  this.monitorMissionProgress = function() {
    console.log(`Миссия ${this.missionName}.`);
    console.log(`${this.launchDate} c земли отправлен марсоход ${this.marsRover.model} на корабле ${this.spacecraft.name}`);
    this.spacecraft.checkFuel();
  };
}

/* mySpacecraft.launch();
mySpacecraft.land('Mars');
mySpacecraft.checkFuel();
mySpacecraft.refuel(30);
mySpacecraft.checkFuel();

myMarsRover.move('Запад');
myMarsRover.collectData('JPG');
myMarsRover.sendDataToEarth(); */

missionControl.initiateLaunch();
missionControl.deployMarsRover();
missionControl.coordinateMission();
missionControl.monitorMissionProgress();