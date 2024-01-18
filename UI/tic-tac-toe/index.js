let turn = "X";
let isGameOver = false;

let winningMessage = document.querySelector(".winning-message");
let info = document.querySelector("#info");
let reset = document.querySelector("#reset");

const changeTurn = () => (turn === "X" ? "0" : "X");

const checkWin = () => {
  const boxTexts = document.querySelectorAll(".boxText");
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  win.forEach((e) => {
    if (
      boxTexts[e[0]].innerText !== "" &&
      boxTexts[e[1]].innerText === boxTexts[e[0]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText
    ) {
      isGameOver = true;
      winningMessage.style.display = "block";
      info.innerText = `${boxTexts[e[0]].innerText} won`;
    }
  });
};

const boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  const boxText = element.querySelector(".boxText");

  element.addEventListener("click", (e) => {
    if (boxText.innerText === "" && !isGameOver) {
      boxText.innerText = turn;
      turn = changeTurn();

      checkWin();

      if (!isGameOver) {
        info.innerText = `Turn for ${turn}`;
      }
    }
  });
});

reset.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".boxText");
  Array.from(boxes).forEach((box) => {
    box.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  winningMessage.style.display = "none";
  info.innerText = `Turn for ${turn}`;
});
