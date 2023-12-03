// planet.js

var createPlanetScene = function (engine) {
  var scene = new BABYLON.Scene(engine);

  // Создаем камеру
  var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 50, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(engine.getRenderingCanvas(), true);

  // Создаем солнце
  var sun = BABYLON.MeshBuilder.CreateSphere("sun", { diameter: 10 }, scene);
  var sunMaterial = new BABYLON.StandardMaterial("sunMaterial", scene);
  sunMaterial.emissiveColor = new BABYLON.Color3(1, 1, 0);
  sun.material = sunMaterial;

  // Создаем Землю
  var earth = BABYLON.MeshBuilder.CreateSphere("earth", { diameter: 3 }, scene);
  var earthMaterial = new BABYLON.StandardMaterial("earthMaterial", scene);
  earthMaterial.diffuseTexture = new BABYLON.Texture("textures/earth.jpg", scene);
  earth.material = earthMaterial;

  // Создаем Меркурий
  var mercury = BABYLON.MeshBuilder.CreateSphere("mercury", { diameter: 1 }, scene);
  var mercuryMaterial = new BABYLON.StandardMaterial("mercuryMaterial", scene);
  mercuryMaterial.diffuseTexture = new BABYLON.Texture("textures/mercury.jpg", scene);
  mercury.material = mercuryMaterial;

  // Создаем Венеру
  var venus = BABYLON.MeshBuilder.CreateSphere("venus", { diameter: 2 }, scene);
  var venusMaterial = new BABYLON.StandardMaterial("venusMaterial", scene);
  venusMaterial.diffuseTexture = new BABYLON.Texture("textures/venus.jpg", scene);
  venus.material = venusMaterial;

  // Создаем Марс
  var mars = BABYLON.MeshBuilder.CreateSphere("mars", { diameter: 2.5 }, scene);
  var marsMaterial = new BABYLON.StandardMaterial("marsMaterial", scene);
  marsMaterial.diffuseTexture = new BABYLON.Texture("textures/mars.jpg", scene);
  mars.material = marsMaterial;

  // Позиции планет относительно орбит вокруг солнца
  var sunPosition = BABYLON.Vector3.Zero();
  var earthOrbitRadius = 30;
  var mercuryOrbitRadius = 20;
  var venusOrbitRadius = 25;
  var marsOrbitRadius = 35;

  var earthOrbitSpeed = 0.005;
  var mercuryOrbitSpeed = 0.008;
  var venusOrbitSpeed = 0.006;
  var marsOrbitSpeed = 0.004;

  var planets = [earth, mercury, venus, mars];
  var orbits = [earthOrbitRadius, mercuryOrbitRadius, venusOrbitRadius, marsOrbitRadius];
  var speeds = [earthOrbitSpeed, mercuryOrbitSpeed, venusOrbitSpeed, marsOrbitSpeed];

  scene.registerBeforeRender(function () {
      for (var i = 0; i < planets.length; i++) {
          var planet = planets[i];
          var orbitRadius = orbits[i];
          var orbitSpeed = speeds[i];

          planet.position.x = Math.cos(orbitSpeed * engine.getDeltaTime()) * orbitRadius + sunPosition.x;
          planet.position.z = Math.sin(orbitSpeed * engine.getDeltaTime()) * orbitRadius + sunPosition.z;

          planet.rotation.y += orbitSpeed * engine.getDeltaTime();
      }
  });

  return scene;
};
