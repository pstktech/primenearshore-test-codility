import React, { useState } from 'react';
import classNames from 'classnames';

const TILE_SIZE = 75;
const BOARD_SIZE = TILE_SIZE * 4;

const SlidingPuzzle = ({ initialConfiguration, onSolveCallback }) => {
  const [board, setBoard] = useState(initialConfiguration);

  // get row and column of the tile based on its index
  const getTilePosition = (index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return { row, col };
  };

  // get index of the tile based on its row and column
  const getTileIndex = (row, col) => row * 4 + col;

  // check if the tile can be moved to the empty space
  const isValidMove = (index) => {
    const { row: emptyRow, col: emptyCol } = getTilePosition(board.indexOf(0));
    const { row, col } = getTilePosition(index);
    const isAdjacent = (Math.abs(row - emptyRow) + Math.abs(col - emptyCol)) === 1;
    return isAdjacent;
  };


  //moveTile is called when a tile is clicked. 
  //move the tile to the empty space and update the board
  //It checks if the tile can be moved, and if so, 
  //it creates a new board array with the tile moved to the empty space, and updates the state of the component to reflect the new board.
  //If the new board is the solved configuration, it calls the onSolveCallback prop.


  const moveTile = (index) => {
    if (isValidMove(index)) {
      const newBoard = [...board];
      const emptyIndex = board.indexOf(0);
      newBoard[emptyIndex] = board[index];
      newBoard[index] = 0;
      setBoard(newBoard);
      if (isSolved(newBoard)) {
        onSolveCallback();
      }
    }
  };

  // check if the board is correctly sorted into order
  const isSolved = (board) => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  // renderTile is a helper function that takes a tile value and index and returns a div element representing the tile. 
  //It sets the position of the tile based on its row and column, and adds an empty class if the tile is the empty space.
  //When the tile is clicked, it calls the moveTile function with the tile index.
  
  const renderTile = (value, index) => {
    const isEmpty = value === 0;
    const { row, col } = getTilePosition(index);
    const style = {
      top: row * TILE_SIZE,
      left: col * TILE_SIZE,
      width: TILE_SIZE,
      height: TILE_SIZE,
    };
    const classes = classNames('tile', { empty: isEmpty });
    return (
      <div
        key={index}
        className={classes}
        style={style}
        onClick={() => moveTile(index)}
      >
        {value !== 0 && value}
      </div>
    );
  };

  return (
    <div className="board" style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>
      {board.map(renderTile)}
    </div>
  );
};

export default SlidingPuzzle;
