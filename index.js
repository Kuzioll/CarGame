const gameStart = document.querySelector(".game-start");
const gameWindow = document.querySelector(".game-window-player");
const userCar = document.querySelector(".game-window-player-car");
let startNumber = 70;
let topNumber = 40;
const botCarone = document.querySelector(".game-window-bot-car-1");
const botCartwo = document.querySelector(".game-window-bot-car-2");
const botCarthree = document.querySelector(".game-window-bot-car-3");

//Mobile buttons

const arrowl = document
  .querySelector(".arrow-left-p")
  .addEventListener("click", () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 37 }));
  });

const arrowr = document
  .querySelector(".arrow-right-p")
  .addEventListener("click", () => {
    console.log("test");
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 39 }));
  });

//lunch game
gameStart.addEventListener("click", () => {
  gameWindow.classList.add("game-window-player-active");
  botCarone.classList.add("game-window-bot-car-1-active");
  botCartwo.classList.add("game-window-bot-car-2-active");
  botCarthree.classList.add("game-window-bot-car-3-active");

  // check colison
  setInterval(function () {
    let aRect = userCar.getBoundingClientRect();
    let bRect = botCarone.getBoundingClientRect();
    let cRect = botCartwo.getBoundingClientRect();
    let dRect = botCarthree.getBoundingClientRect();

    if (
      aRect.left < bRect.left + bRect.width &&
      aRect.left + aRect.width > bRect.left &&
      aRect.top < bRect.top + bRect.width &&
      aRect.width + aRect.top > bRect.top
    ) {
      window.alert("You lose!");
      gameWindow.classList.remove("game-window-player-active");
      botCarone.classList.remove("game-window-bot-car-1-active");
      botCartwo.classList.remove("game-window-bot-car-2-active");
      botCarthree.classList.remove("game-window-bot-car-3-active");
      clearInterval;
      location.reload();
    }

    if (
      aRect.left < cRect.left + cRect.width &&
      aRect.left + aRect.width > cRect.left &&
      aRect.top < cRect.top + cRect.width &&
      aRect.width + aRect.top > cRect.top
    ) {
      window.alert("You lose!");
      gameWindow.classList.remove("game-window-player-active");
      botCarone.classList.remove("game-window-bot-car-1-active");
      botCartwo.classList.remove("game-window-bot-car-2-active");
      botCarthree.classList.remove("game-window-bot-car-3-active");
      clearInterval;
      location.reload();
    }

    if (
      aRect.left < dRect.left + dRect.width &&
      aRect.left + aRect.width > dRect.left &&
      aRect.top < dRect.top + dRect.width &&
      aRect.width + aRect.top > dRect.top
    ) {
      window.alert("You lose!");
      gameWindow.classList.remove("game-window-player-active");
      botCarone.classList.remove("game-window-bot-car-1-active");
      botCartwo.classList.remove("game-window-bot-car-2-active");
      botCarthree.classList.remove("game-window-bot-car-3-active");
      clearInterval;
      location.reload();
    }
  }, 10);

  setTimeout(() => {
    gameWindow.classList.remove("game-window-player-active");
    botCarone.classList.remove("game-window-bot-car-1-active");
    botCartwo.classList.remove("game-window-bot-car-2-active");
    botCarthree.classList.remove("game-window-bot-car-3-active");
    clearInterval;
    window.alert("Congratulations you win!");
  }, 60000);

  //Player car movment.
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 39) {
      if (startNumber === 75) {
        return;
      } else {
        startNumber++;
        startNumber++;
        startNumber++;
        startNumber++;
        startNumber++;
        userCar.style.left = startNumber + "%";
      }
    }

    if (event.keyCode === 37) {
      if (startNumber === 0) {
        return;
      } else {
        startNumber--;
        startNumber--;
        startNumber--;
        startNumber--;
        startNumber--;
        userCar.style.left = startNumber + "%";
      }
    }
  });
});

let red;
