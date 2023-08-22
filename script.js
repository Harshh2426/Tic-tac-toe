let ticArray = [];
let playerTurnSwapper = document.querySelector(".playerTurn");
let content = document.querySelectorAll(".content");
let box = document.querySelector(".box");
let announce = document.querySelector(".announce");
let r = 3;
let c = 3;
let d = 0;
let flag = 0;
function ticArrayCreator() {
  for (let i = 0; i < 3; i++) {
    ticArray[i] = [];
    for (let j = 0; j < 3; j++) {
      ticArray[i][j] = -1;
    }
  }
}
ticArrayCreator();

function rowChecker(i) {
  let cnt = 0;
  for (let r = 0; r < 3; r++) {
    if (ticArray[i][r] == flag) {
      cnt++;
    }
  }
  return cnt === 3;
}

function colChecker(j) {
  let cnt = 0;
  for (let r = 0; r < 3; r++) {
    if (ticArray[r][j] === flag) {
      cnt++;
    }
  }
  return cnt === 3;
}

function diagonalChecker() {
  let cnt = 0,
    cnt1 = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j && ticArray[i][j] === flag) {
        cnt++;
      }
      if (i + j == 2 && ticArray[i][j] === flag) {
        cnt1++;
      }
    }
  }
  return cnt === 3 || cnt1 === 3;
}

function winnerCheker(i, j) {
  if (rowChecker(i)) {
    //   console.log("row" + i);
    return true;
  }
  if (colChecker(j)) {
    //   console.log("col" + j);
    return true;
  }
  if (diagonalChecker()) {
    //   console.log("diagonal");
    return true;
  }
}

function indexSetter(i, j) {
  if (ticArray[i][j] === -1) {
    ticArray[i][j] = flag;
  }
}

function flagSwapper() {
  if (flag === 0) {
    flag = 1;
  } else {
    flag = 0;
  }
}

box.addEventListener("click", (e) => {
  let row = Number.parseInt(e.target.children[0].dataset.row);
  let col = Number.parseInt(e.target.children[0].dataset.col);
  e.target.children[0].innerHTML = `${flag}`;
  indexSetter(row, col);
  playerTurnSwapper.classList.toggle("active");
  console.log(ticArray);
  if (winnerCheker(row, col)) {
    document.body.classList.add("winner");
    if (flag === 0) {
        document.body.classList.add("player1");
    }
    else{
        document.body.classList.add("player2");

    }
  }
  flagSwapper();
});
