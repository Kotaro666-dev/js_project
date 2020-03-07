const restart = document.querySelector("#restart_btn");
const judge_msg = document.getElementById("judge_msg");

const list_judge_msg = ["NEW GAME", "YOU WON!", "YOU LOSE", "DRAW"];
const circle = `<i class="far fa-circle" style="color: var(--clr-blue);"></i>`;
const cross = `<i class="fas fa-times" style="color: var(--clr-red);"></i>`;
const record = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const item_elements = document.querySelectorAll("[data-cell]");
let whose_turn = "me";
let game_counter = 0;

item_elements.forEach(item => {
  item.addEventListener("click", handle_click, { once: true });
});

function handle_click(e) {
  const item = e.target;
  const current_player = whose_turn ? "me" : "you";
  place_mark(item, current_player);

  // INPUT THE DATA TO RECORD
  const value = item.id;
  input_data(value, current_player);

  //　COUTING THE GAME TIME
  game_counter++;

  // CHECK FOR WIN
  if (check_win(record) === true) {
    game_over();
    // CHECK FOR DRAW
  } else if (check_draw(game_counter) === true) {
    game_over();
  } else {
    //SWITCH TURNS
    swap_turns();
  }
}

function place_mark(item, player) {
  if (player === "me") {
    item.innerHTML = circle;
  } else {
    item.innerHTML = cross;
  }
}

function input_data(value, player) {
  for (let i = 0; i < record.length; i++) {
    if (player === "me" && value === record[i]) {
      record[i] = -1;
    } else if (player === "you" && value === record[i]) {
      record[i] = -2;
    }
  }
}

function check_win(record) {
  if (
    (record[1] === -1 && record[2] === -1 && record[3] === -1) ||
    (record[4] === -1 && record[5] === -1 && record[6] === -1) ||
    (record[7] === -1 && record[8] === -1 && record[9] === -1) ||
    (record[1] === -1 && record[4] === -1 && record[7] === -1) ||
    (record[2] === -1 && record[5] === -1 && record[8] === -1) ||
    (record[3] === -1 && record[7] === -1 && record[9] === -1) ||
    (record[1] === -1 && record[5] === -1 && record[9] === -1) ||
    (record[3] === -1 && record[5] === -1 && record[7] === -1)
  ) {
    judge_msg.textContent = list_judge_msg[1];
    return true;
  } else if (
    (record[1] === -2 && record[2] === -2 && record[3] === -2) ||
    (record[4] === -2 && record[5] === -2 && record[6] === -2) ||
    (record[7] === -2 && record[8] === -2 && record[9] === -2) ||
    (record[1] === -2 && record[4] === -2 && record[7] === -2) ||
    (record[2] === -2 && record[5] === -2 && record[8] === -2) ||
    (record[3] === -2 && record[6] === -2 && record[9] === -2) ||
    (record[1] === -2 && record[5] === -2 && record[9] === -2) ||
    (record[3] === -2 && record[5] === -2 && record[7] === -2)
  ) {
    judge_msg.textContent = list_judge_msg[2];
    return true;
  }
}

function check_draw(game_counter) {
  if (game_counter === 9) {
    judge_msg.textContent = list_judge_msg[3];
    return true;
  }
}

function game_over() {
  setTimeout(function() {
    window.location.reload();
  }, "3000");
}

function swap_turns() {
  whose_turn = !whose_turn;
}

// RESTART;
restart.addEventListener("click", e => {
  judge_msg.textContent = list_judge_msg[0];

  // Initializaton by reloading page
  window.location.reload();
  // init_board();
});

/************************************************************
 *
 *
 *
 *                    My first plan
 *
 *
 ***********************************************************/

/*
// MAJOUR ACTION
const restart = document.querySelector("#restart_btn");
const judge_msg = document.getElementById("judge_msg");

// MATERIAL
const list_judge_msg = ["NEW GAME", "YOU WON!", "YOU LOSE", "DRAW"];
const circle = `<i class="far fa-circle" style="color: var(--clr-blue);"></i>`;
const cross = `<i class="fas fa-times" style="color: var(--clr-red);"></i>`;

// ARRAY
const board_content = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

// EACH NUMBER
board_content[1] = document.querySelector("#one");
board_content[2] = document.querySelector("#two");
board_content[3] = document.querySelector("#three");
board_content[4] = document.querySelector("#four");
board_content[5] = document.querySelector("#five");
board_content[6] = document.querySelector("#six");
board_content[7] = document.querySelector("#seven");
board_content[8] = document.querySelector("#eight");
board_content[9] = document.querySelector("#nine");

// Initialization of board
function init_board() {
  board_content[1].innerHTML = "";
  board_content[2].innerHTML = "";
  board_content[3].innerHTML = "";
  board_content[4].innerHTML = "";
  board_content[5].innerHTML = "";
  board_content[6].innerHTML = "";
  board_content[7].innerHTML = "";
  board_content[8].innerHTML = "";
  board_content[9].innerHTML = "";
}

// Marking board
function mark_board(num, player) {
  num.addEventListener("click", () => {
    if (player === "you") {
      num.innerHTML = circle;
    } else {
      num.innerHTML = cross;
    }
  });
}

function draw_board(num) {
  mark_board(board_content[1], player[num]);
  mark_board(board_content[2], player[num]);
  mark_board(board_content[3], player[num]);
  mark_board(board_content[4], player[num]);
  mark_board(board_content[5], player[num]);
  mark_board(board_content[6], player[num]);
  mark_board(board_content[7], player[num]);
  mark_board(board_content[8], player[num]);
  mark_board(board_content[9], player[num]);
}

// function update_board();

// RESTART;
restart.addEventListener("click", () => {
  judge_msg.textContent = list_judge_msg[0];

  init_board();
});

// PLAY
const player = ["you", "computer"];
const board = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
*/
