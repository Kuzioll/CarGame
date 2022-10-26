const gameStart = document.querySelector(".game-start");
const gameWindow = document.querySelector(".game-window-player");
const userCar = document.querySelector(".game-window-player-car");
let startNumber = 70;
let topNumber = 40;
const botCarone = document.querySelector(".game-window-bot-car-1");
const botCartwo = document.querySelector(".game-window-bot-car-2");
const botCarthree = document.querySelector(".game-window-bot-car-3");

//lunch game
gameStart.addEventListener("click", () => {
  gameWindow.classList.add("game-window-player-active");
  botCarone.classList.add("game-window-bot-car-1-active");
  botCartwo.classList.add("game-window-bot-car-2-active");
  botCarthree.classList.add("game-window-bot-car-3-active");

  //Player car movment.
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 39) {
      if (startNumber === 75) {
        return;
      } else {
        startNumber = startNumber + 5;
        userCar.style.left = startNumber + "%";
      }
    }

    if (event.keyCode === 37) {
      if (startNumber === 0) {
        return;
      } else {
        startNumber = startNumber - 5;
        userCar.style.left = startNumber + "%";
      }
    }

    if (event.keyCode === 38) {
      if (topNumber === 0) {
        return;
      } else {
        topNumber = topNumber - 5;
        userCar.style.top = topNumber + "%";
      }
    }

    if (event.keyCode === 40) {
      if (topNumber === 40) {
        return;
      } else {
        topNumber = topNumber + 5;
        userCar.style.top = topNumber + "%";
      }
    }
  });

  //bot car movment
});
