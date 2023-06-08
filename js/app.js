"use strict";
// Making voting app for goats

//global variables for
let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

let goat1Img = document.getElementById("goat1");
let goat2Img = document.getElementById("goat2");

function Goat(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let cruisinGoat = new Goat("cruisin-goat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("float-your-goat", "./img/float-your-goat.jpg");
let goatAway = new Goat("goat-away", "./img/goat-away.jpg");
let goatLogo = new Goat("goat-logo", "./img/goat-logo.png");
let goatOutofHand = new Goat("goat-out-of-hand", "./img/goat-out-of-hand.jpg");
let kissingGoat = new Goat("kissing-goat", "./img/kissing-goat.jpg");
let sassyGoat = new Goat("sassy-goat", "./img/sassy-goat.jpg");
let smilingGoat = new Goat("smiling-goat", "./img/smiling-goat.jpg");
let sweaterGoat = new Goat("sweater-goat", "./img/float-your-goat.jpg");

let goatArray = [];

goatArray.push(cruisinGoat);
goatArray.push(floatGoat);
goatArray.push(goatAway);
goatArray.push(goatLogo);
goatArray.push(goatOutofHand);
goatArray.push(kissingGoat);
goatArray.push(sassyGoat);
goatArray.push(smilingGoat);
goatArray.push(sweaterGoat);

function setGoatImages(goat1, goat2) {
  goat1Img.src = goat1.imgSrc;
  goat1Img.alt = goat1.name;
  goat1Img.title = goat1.name;
  goat2Img.src = goat2.imgSrc;
  goat2Img.alt = goat2.name;
  goat2Img.title = goat2.name;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setRandomGoatImages() {
  let goatIndex1 = getRandomInt(goatArray.length);
  let goatIndex2 = getRandomInt(goatArray.length);
  let goat1 = goatArray[goatIndex1];
  let goat2 = goatArray[goatIndex2];
  while (goatIndex1 === goatIndex2) {
    goatIndex1 = getRandomInt(goatArray.length);
    goatIndex2 = getRandomInt(goatArray.length);
  }
  setGoatImages(goat1, goat2);
}

setRandomGoatImages();

//define the eventHandler
function handleGoatClick(event) {
  console.log("clicked!!");
  event.preventDefault();
  let target = event.target;
  let goatName = target.alt;
  console.log(goatName);

  let theBestGoat;
  for (let i = 0; i < goatArray.length; i++) {
    let goat = goatArray[i];
    if (goat.name === target.alt) {
      theBestGoat = goat;
    }
  }
  theBestGoat.voteCount++;
  console.log(theBestGoat.voteCount);
  setRandomGoatImages();
}
//add the eventHandler
votingArea.addEventListener("click", handleGoatClick);

//voting machine

function renderResults() {
  resultsArea.innerHTML = "";
  let goatUL = document.createElement("ul");
  for (let i = 0; i < goatArray.length; i++) {
    let goat = goatArray[i];
    let goatName = goat.name;
    let goatVoteCount = goat.voteCount;
    let report = `The goat names ${goatName} got ${goatVoteCount} votes.`;
    let goatLI = document.createElement("li");
    goatLI.textContent = report;
    goatUL.appendChild(goatLI);
  }
  resultsArea.appendChild(goatUL);
}
let showResultsButton = document.getElementById("show-results-button");
showResultsButton.addEventListener("click", renderResults);
