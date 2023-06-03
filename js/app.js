"use strict";
// Making voting app for goats

//global variables for
let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("voting-area");

function Goat(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let cruisinGoat = new Goat("CrusinGoat", "./img/crusin-goat.jpg");
let floatGoat = new Goat("FloatYourGoat", "./img/float-your-goat.jpg");

let goatArray = [];

goatArray.push(cruisinGoat);
goatArray.push(floatGoat);

console.log(goatArray);
