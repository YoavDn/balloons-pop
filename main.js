"use strict";

var elBalloons = document.querySelectorAll(".balloon");
var elBalloon = document.querySelector(".balloons");
// // var elBalloon = document.querySelector(".balloon");

var gBalloons = [
  { id: 1, bottom: 0, speed: 2 },
  { id: 2, bottom: 0, speed: 4 },
  { id: 3, bottom: 0, speed: 6 },
  { id: 4, bottom: 0, speed: 3 },
];

var gInterval;

function startGame() {
  gInterval = setInterval(balloonMoveUp, 300);
}

function renderBalloons() {
  var strHTML = "";
  for (var i = 0; i < gBalloons.length; i++) {
    strHTML +=
      '<div class="balloon balloon' +
      (i + 1) +
      ' "onclick="balloonClick(this)"></div>';
  }

  elBalloon.innerHTML = strHTML;
}

function balloonMoveUp() {
  var elBalloons = document.querySelectorAll(".balloon");
  for (var i = 0; i < elBalloons.length; i++) {
    var gBalloon = gBalloons[i];
    var elBalloon = elBalloons[i];

    gBalloon.bottom += gBalloon.speed;
    elBalloon.style.bottom = gBalloon.bottom + "%";

    // console.log(elBalloons[i]);

    if (gBalloon.bottom > 200) {
      clearInterval(gInterval);
    }
  }
}

function balloonClick(thisBalloon) {
  var audio = document.getElementById("audio");
  thisBalloon.style.opacity = 0;
  audio.play();
}

// var audio = new Audio(audio);
