const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = Array(9).fill(null);

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`${board[a]} wins!`);
      resetGame();
      return;
    }
  }

  if (!board.includes(null)) {
    alert("It's a draw!");
    resetGame();
  }
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!board[index]) {
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  board = Array(9).fill(null);
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
