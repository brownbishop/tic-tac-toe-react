import React, { useState } from 'react';
import { Board } from './Board.js';

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState('X');
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = nextPlayer;
    setBoard(boardCopy);
    setNextPlayer(nextPlayer == 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setNextPlayer('X');
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={resetGame}>
        Reset
      </button>
      <Board squares={board} onClick={handleClick} />
      <p style={styles.paragraph}>
        {winner
          ? "Winner: " + winner
          : "Next Player: " +  nextPlayer
        }
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#282828',
  },
  button: {
    background: '#689d6a',
    color: '#ebdbb2',
    fontSize: '2rem',
    borderRadius: 8,
    padding: 20,
    margin: 20,
  },
  paragraph: {
    color: '#b8bb26',
    fontSize: '2rem',
  },
}

function equalAndNotNull(a, b, c) {
  return a !== null && a === b && b === c ;
}

function calculateWinner(board) {
  const paths = [
    // lines
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
    // colums
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
    // diagonals
		[0, 4, 8],
		[2, 4, 6],
	];

  for (let [a, b, c] of paths)
		if (equalAndNotNull(board[a], board[b], board[c]))
			return board[a];

	return null;
}

