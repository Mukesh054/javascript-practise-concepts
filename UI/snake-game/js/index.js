let score = 0;
let hiscore = 0;
let speed = 4;
let inputDir = { x: 0, y: 0 };
let snakeArr = [{ x: 12, y: 13 }];
let food = { x: 5, y: 6 };
let repaintTime = 0;

function main(time) {
  window.requestAnimationFrame(main);

  if ((time - repaintTime) / 1000 < 1 / speed) {
    return;
  }
  repaintTime = time;

  gameEngine();
}

function isCollide(snake) {
  // bumb into myself
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return true;
    }
  }

  // If you bump into the wall
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }

  return false;
}

function gameEngine() {
  // Check if game is over
  if (isCollide(snakeArr)) {
      inputDir = { x: 0, y: 0 };
    alert('Game Over');
    snakeArr = [{x: 13, y: 15}];
    score = 0;
  }

  // If you have eaten the food
  if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
    score++;

    scoreBox.innerHTML = "Score: " + score;
    if (score > hiscore) {
      hiscore = score;
      hiscoreBox.innerHTML = "HiScore: " + hiscore;
    }

    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });

    const a = 2;
    const b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Move snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }
  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // Make snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    const element = document.createElement("div");
    element.style.gridRowStart = e.y;
    element.style.gridColumnStart = e.x;
    if (index === 0) {
      element.classList.add("head");
    } else {
      element.classList.add("snake");
    }
    board.appendChild(element);
  });

  // Make food
  const snakeElement = document.createElement("div");
  snakeElement.style.gridRowStart = food.y;
  snakeElement.style.gridColumnStart = food.x;
  snakeElement.classList.add("food");
  board.appendChild(snakeElement);
}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; // Start the game

  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});
