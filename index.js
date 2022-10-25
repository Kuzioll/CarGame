const gameStart = document.querySelector(".game-start");
const gameWindow = document.querySelector(".game-window-player");
const userCar = document.querySelector(".game-window-player-car");
let startNumber = 70;
const botCarone = document.querySelector(".game-window-bot-car-1");


//lunch game
gameStart.addEventListener("click", () => {
  gameWindow.classList.add("game-window-player-active");

  //Player car movment.
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 39) {
      if (startNumber === 77) {
        return;
      } else {
        startNumber++;
        startNumber++;
        userCar.style.left = startNumber + "%";
      }
    }

    if (event.keyCode === 37) {
      if (startNumber === 1) {
        return;
      } else {
        startNumber--;
        startNumber--;
        userCar.style.left = startNumber + "%";
      }
    }
  });

//bot car movment







});




