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

let cruisinGoat = new Goat("Cruisin-Goat", "./img/cruisin-goat.jpg");
let floatGoat = new Goat("Float-Your-Goat", "./img/float-your-goat.jpg");

let goatArray = [];

goatArray.push(cruisinGoat);
goatArray.push(floatGoat);

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
}
//add the eventHandler
votingArea.addEventListener("click", handleGoatClick);

//voting machine

function renderResults() {
  resultsArea.innerHTML = "";
  let goatUL = document.createElement("ul");
  for (let i = 0; i < goatArray.length; i++) {
    let goat = goatArray[i];
    let goatName = goat.Name;
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
