
let player1 = prompt("Enter Player 1 name (X)") || "Player 1";
let player2 = prompt("Enter Player 2 name (O)") || "Player 2";


let winopts = [
  [1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],
  [1,5,9],[3,5,7]
];

let p1 = [];
let p2 = [];
let gameOn = true;
let current = "X";

let btns = document.getElementsByClassName("btn");
let marks = document.getElementsByClassName("mark");
let result = document.getElementById("result");

result.textContent = `${player1}'s Turn (X)`;


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (!gameOn) {
      alert("Match ended");
      return;
    }

    
    if (marks[i].textContent === "X" || marks[i].textContent === "O") {
      return;
    }

    marks[i].style.display = "block";

    if (current === "X") {
      marks[i].textContent = "X";
      p1.push(i + 1);
      current = "O";
      result.textContent = `${player2}'s Turn (O)`;
      checkWinner(p1, player1);
    } else {
      marks[i].textContent = "O";
      p2.push(i + 1);
      current = "X";
      result.textContent = `${player1}'s Turn (X)`;
      checkWinner(p2, player2);
    }
  });
}


function checkWinner(playerMoves, playerName) {
  for (let combo of winopts) {
    let win = combo.every(pos => playerMoves.includes(pos));
    if (win) {
      result.textContent = `🎉 ${playerName} Wins!`;
      gameOn = false;
      return;
    }
  }
}
