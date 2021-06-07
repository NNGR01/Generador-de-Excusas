/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronombre = ["Un", "Mi"];
  let sujeto = [
    "contandor",
    "mapache",
    "perro",
    "chofer",
    "vecino",
    "unicornio"
  ];
  let action = ["tomo mi", "se comio mi", "cambio mi", "tiro mi", "se robo mi"];
  let posesion = [
    "tarea",
    "codigo",
    "guitarra",
    "zapatillas",
    "ganas de vivir"
  ];
  let donde = ["en la calle", "en mi casa", "de la pega"];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoeIndex = Math.floor(Math.random() * sujeto.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoeIndex] +
    " " +
    action[actionIndex] +
    " " +
    posesion[posesionIndex] +
    " " +
    donde[dondeIndex]
  );
};
