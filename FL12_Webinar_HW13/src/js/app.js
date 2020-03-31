import '../scss/style.scss';
import { N_SIZE, EMPTY, X, O } from './const';
import { win } from './win';
import { contains } from './contains';

const boxes = [];
let turn = X;
let score;
let moves;

const init = () => {
  var board = document.createElement('table');
  board.setAttribute('border', 1);
  board.setAttribute('cellspacing', 0);

  var identifier = 1;
  for (var i = 0; i < N_SIZE; i++) {
    var row = document.createElement('tr');
    board.appendChild(row);
    for (var j = 0; j < N_SIZE; j++) {
      var cell = document.createElement('td');
      cell.setAttribute('height', 120);
      cell.setAttribute('width', 120);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.classList.add('col' + j, 'row' + i);
      if (i == j) {
        cell.classList.add('diagonal0');
      }
      if (j == N_SIZE - i - 1) {
        cell.classList.add('diagonal1');
      }
      cell.identifier = identifier;
      cell.addEventListener('click', set);
      row.appendChild(cell);
      boxes.push(cell);
      identifier += identifier;
    }
  }

  document.getElementById('tictactoe').appendChild(board);
  startNewGame();
};

const startNewGame = () => {
  score = {
    X: 0,
    O: 0
  };
  moves = 0;
  turn = X;
  document.getElementById('winner').textContent = '';
  boxes.forEach(function(square) {
    square.innerHTML = EMPTY;
  });
};

// contains(selector, text);

function set() {
  if (this.innerHTML !== EMPTY) {
    return;
  }
  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;
  if (win(this, turn)) {
    document.getElementById('winner').textContent = `Player ${turn} won!`;
    return;
  } else if (moves === N_SIZE * N_SIZE) {
    document.getElementById('winner').textContent = 'Draw!';
    return;
  } else {
    turn = turn === X ? O : X;
    document.getElementById('turn').textContent = 'Player ' + turn;
  }
}

document.getElementById('restart').addEventListener('click', startNewGame);

init();
