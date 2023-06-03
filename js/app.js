"use strict";
// Making voting app for goats

//global variables for
let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("voting-area");

let goat1Img = document.getElementById("goat1");
let goat2Img = document.getElementById("goat2");

function Goat(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let cruisinGoat = new Goat("CruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat.jpg");

let goatArray = [];

goatArray.push(cruisinGoat);
goatArray.push(floatGoat);

console.log(goatArray);

//make this random goats
// input: goat objects
// it take in goat objects and puts them into the dom
function setGoatImages(goat1, goat2) {
  goat1Img.src = goat1.imgSrc;
  goat1Img.alt = goat1.name;
  goat1Img.title = goat1.name;
  goat2Img.src = goat2.imgSrc;
  goat2Img.alt = goat2.name;
  goat2Img.title = goat2.name;
}

setGoatImages(goatArray[0], goatArray[1]);

//get the elements

//define the eventHandler
function handleGoatClick(event) {
  event.preventDefault();
  let target = event.target;
  let goatName = target.alt;
}

//add the eventHandler
votingArea.addEventListener("click", handleGoatClick);

//voting machine
