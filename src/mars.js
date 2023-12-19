function Spacecraft(name, fueltype) {
  this.name = name;
  this.fueltype = fueltype;
  this.fuelLevel = 0;
  this.location = 4;
  this.price = 0;
  this.tankVolume = 0;
  this.speed = 0;
  this.fuelConsumption = 0;
  this.autopilot = false;

  this.launch = function() {
    if (this.fuelLevel === 100) {
      console.log(`Корабль ${this.name} полностью заправлен и готов к запуску в космос!`);
      console.log(`Начинаем отсчет`);
      for (let sec = 10; sec > 0; sec--) {console.log(sec)};
      this.fuelLevel -= 10;
      console.log(`Корабль ${this.name} успешно покинул космопорт!`);
      this.location = 0;
    } else if (this.location !== 0) {
      console.log(`У корабля ${this.name} баки заправлены на ${this.fuelLevel}%, требуется заправка`)
    } else {
      console.log(`Корабль ${this.name} находится в космосе!`);
    }
  };

  this.land = function(destination) {
    console.log(`Экипажу ${this.name} подготовиться к посадке на ${destination}.`);
    this.fuelLevel -= 10;
    this.location = destination;
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

// missionControl.initiateLaunch();
// missionControl.deployMarsRover();
// missionControl.coordinateMission();
// missionControl.monitorMissionProgress();

// const mySpacecraft = new Spacecraft('Odyssey', 'Hydrogen');
// const myMarsRover = new MarsRover('Curiosity', 'Advanced GPS');
// const missionControl = new MissionControl('Mars Exploration', '2023-09-30', mySpacecraft, myMarsRover);


// /* Часть 2: создание 10 кораблей с разными характеристиками, */
// Создание космических кораблей (номер, имя корабля, цена, объем бака, скорость у.е в секунду, расход топлива на 1000 у.е пути, наличие автопилота)

let shipsData = [
  [1, "Voyager", 1000000, 100, 5000, 2, false],
  [2, "Falcon", 1500000, 120, 6000, 1.5, true],
  [3, "Runner", 2000000, 180, 7000, 1.2, true],
  [4, "Delta", 1800000, 200, 6000, 1.3, true],
  [5, "Lunar", 1200000, 120, 5000, 1.9, false],
  [6, "Blazer", 2200000, 200, 7000, 1.1, true],
  [7, "Rider", 1600000, 150, 5000, 1.4, true],
  [8, "Seeker", 1900000, 200, 8000, 1.3, true],
  [9, "Skipper", 1400000, 130, 6000, 1.8, false],
  [10, "Orbit", 2300000, 200, 8000, 1, true]
];

let ships = shipsData.map(data => ({
  id: data[0],
  name: data[1],
  price: data[2],
  tankVolume: data[3],
  speed: data[4],
  fuelConsumption: data[5],
  autopilot: data[6]
}));

let cash = (Math.floor(Math.random() * 11) * 100000) + 1000000;
const fuel = Math.floor(Math.random() * 100);

let UserShip = new Spacecraft('New', 'Hydrogen');

spacecraftImage.src = 'images/port.jpg';
console.log("ID\t\tName\t\t\tPrice\t\t\tTank Volume\t\t\tSpeed\t\t\tFuel Consumption\t\t\tAutopilot");
ships.forEach(ship => {
  console.log(`${ship.id}\t\t${ship.name}\t\t\t${ship.price}\t\t\t\t${ship.tankVolume}\t\t\t\t${ship.speed}\t\t\t\t\t${ship.fuelConsumption}\t\t\t\t\t\t${ship.autopilot}`);
});
let idShip = prompt(`Приветствую, искатель космических горизонтов! На твоём счету ${cash} Космокоинов. В консоли ты можешь увидеть доступные к приобретению корабли. Укажи номер корабля, который хочешь приобрести:`);
PurchaseVerification();

// Проверка ввода и покупки корабля
function RetryPrompt() {
  idShip = prompt(`У тебя на счету ${cash} коинов. Не тяни с выбором, тут еще куча народу хотят купить свой корабль мечты`)
  PurchaseVerification();
}

function PurchaseVerification() {
  let selectedShip = shipsData.find(ship => ship[0] === +idShip);
  if (selectedShip) {
    console.log(`Ты выбрал корабль ${selectedShip[1]}, идет проведение платежа...`);
    setTimeout(() => {
      if (cash - selectedShip[2] >= 0) {
        cash -= selectedShip[2];
        UserShip.name = selectedShip[1];
        UserShip.fueltype = 'Hydrogen';
        UserShip.fuelLevel = fuel;
        UserShip.price = selectedShip[2];
        UserShip.tankVolume = selectedShip[3];
        UserShip.speed = selectedShip[4];
        UserShip.fuelConsumption = selectedShip[5];
        UserShip.autopilot = selectedShip[6];
        console.log(`Поздравляем с покупкой! На твоем счету осталось ${cash} Космокоинов`);
        setTimeout(() => {
          spacecraftImage.src = 'images/controlRoom.jpg'; 
          console.log(`Ты приобрел корабль ${UserShip.name}, в твоих баках на ${UserShip.tankVolume} топлива залито ${UserShip.fuelLevel} ${UserShip.fueltype} от продавца.`);
          console.log(`Средняя скорость корабля ${UserShip.speed}, при расходе топлива ${UserShip.fuelConsumption} на 1000 единиц пути.`);
          UserShip.autopilot 
          ? console.log(`Так же на корабле установлен автопилот дла расчета оптимального маршрута.`) 
          : console.log(`Ты приобрел корабль без автопилота, придется расчитывать маршрут самостоятельно.`);
        }, 5000);
      } else {
        console.log(`К сожалению, на твоем счету недостаточно средств для покупки этого корабля. Выбери другой.`);
        RetryPrompt();
      }
    }, 5000);
  } else {
    console.log(`Корабль с таким ID не найден. Повтори выбор.`);
    setTimeout(() => {
      RetryPrompt();
    }, 1000);
  }
}

/* Координаты планет и расчет маршрута. Расчет маршрута.*/
let planetsData = [
  [1, "Sun", 0, 0, "antihydrogen", 3],
  [2, "Mercury", 5, 7,"iron", 1],
  [3, "Venus", 1, -2, "silicon", 0],
  [4, "Earth", 14, -3, "water", 0],
  [5, "Luna", 11, -2, "helium-3", 0],
  [6, "Mars", -9, -15, "hydrogen", 0],
  [7, "Jupiter", -22, 7, "metallic hydrogen", 2],
  [8, "Saturn", 9, 19, "metallic hydrogen", 2],
  [9, "Uranus", -17, 28, "kryptonite", 3],
  [10, "Neptune", 19, -21, "metanite", 2]
]; // 0 - ничего не нужно, 1 - спецзащита, 2 - спецускорители, 3 - спецзащита и спецускорители

let planets = planetsData.map(data => ({
  id: data[0],
  name: data[1],
  X: data[2],
  Y: data[3],
  materials: data[4],
  specialEquipment: data[5]
}));

// Вывод всех планет
// planets.forEach(planet => {
//   console.log(`ID планеты: ${planet.id}`);
//   console.log(`Имя: ${planet.name}`);
//   console.log(`Координаты (X, Y): (${planet.X}, ${planet.Y})`);
//   console.log(`Вещества: ${planet.materials}`);
//   let specEquip = !planet.specialEquipment ? "не нужно" 
//   : planet.specialEquipment == 1 ? "спецзащита"
//   : planet.specialEquipment == 2 ? "спецускорители" 
//   : "спецзащита и спецускорители";
//   console.log(`Необходимое спецоборудование: ${specEquip}`);
//   console.log('---------------------------');
// });

/* Функции автопилота( расчет расстояния, расчет оптимального маршрута, ) */
function Distance(planet1, planet2) {
  return Math.round(Math.sqrt((planet2.X - planet1.X) ** 2 + (planet2.Y - planet1.Y) ** 2))*1000;
}

const earth = planets.find(planet => planet.name === "Earth");
const moon = planets.find(planet => planet.name === "Luna");
console.log(Distance(earth, moon));