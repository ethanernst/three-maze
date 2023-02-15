export default function generate(
  currentPosition,
  currentArray,
  currentHistory
) {
  // checks if an array contains a given coordinate
  const arrayContainsCoord = (arr, coord) => {
    const arrayString = JSON.stringify(arr);
    const coordString = JSON.stringify(coord);

    return arrayString.includes(coordString);
  };

  // given coords, returns the value of the cell at that position or null
  const getValueAtPosition = pos => {
    if (
      pos[0] < 0 ||
      pos[0] >= currentArray[0].length ||
      pos[1] < 0 ||
      pos[1] >= currentArray.length
    ) {
      return null;
    }

    return currentArray[pos[1]][pos[0]];
  };

  // returns an array with the 4 cell values surrounding a given position
  const getSurroundingValues = pos => {
    const nearbyCells = [];
    nearbyCells.push(getValueAtPosition([pos[0], pos[1] - 1])); // up
    nearbyCells.push(getValueAtPosition([pos[0], pos[1] + 1])); // down
    nearbyCells.push(getValueAtPosition([pos[0] - 1, pos[1]])); // left
    nearbyCells.push(getValueAtPosition([pos[0] + 1, pos[1]])); // right

    return nearbyCells;
  };

  // returns an array containing available moves
  const getAvailableMoves = pos => {
    const nearby = getSurroundingValues(pos);

    const availableMoves = nearby.map(value => {
      if (!value) return 0;
      if (value !== '1111') return 0;
      return 1;
    });

    return availableMoves;
  };

  // randomly pick a direction to move
  const pickMove = availableMoves => {
    let move = Math.floor(Math.random() * 4);
    while (availableMoves[move] === 0) {
      move = Math.floor(Math.random() * 4);
    }

    return move;
  };

  // checks surrounding cells and validates current cell's value
  const validateCell = pos => {
    const currentCellValue = getValueAtPosition(pos);
    const nearbyCellValues = getSurroundingValues(pos);

    const validatedCell = nearbyCellValues.map((cell, i) => {
      if (!cell) return '1';
      if (i === 0 && cell.slice(1, 2) === '0') return '0';
      if (i === 1 && cell.slice(0, 1) === '0') return '0';
      if (i === 2 && cell.slice(3) === '0') return '0';
      if (i === 3 && cell.slice(2, 3) === '0') return '0';
      return currentCellValue.slice(i, i + 1);
    });

    return validatedCell.join('');
  };

  // make move and update array
  const stepForward = (pos, arr, hist, move) => {
    // find updated position
    let updatedPosition;
    if (move === 0) updatedPosition = [pos[0], pos[1] - 1];
    if (move === 1) updatedPosition = [pos[0], pos[1] + 1];
    if (move === 2) updatedPosition = [pos[0] - 1, pos[1]];
    if (move === 3) updatedPosition = [pos[0] + 1, pos[1]];

    // update current cell value
    const currentCell = getValueAtPosition(pos);
    let updatedCurrentCell;
    if (move === 0) updatedCurrentCell = '0' + currentCell.slice(1);
    if (move === 1)
      updatedCurrentCell = currentCell.slice(0, 1) + '0' + currentCell.slice(2);
    if (move === 2)
      updatedCurrentCell = currentCell.slice(0, 2) + '0' + currentCell.slice(3);
    if (move === 3) updatedCurrentCell = currentCell.slice(0, 3) + '0';

    // update maze array with new cell
    const updatedArray = [...arr];
    updatedArray[pos[1]][pos[0]] = updatedCurrentCell;

    // add current position to history
    const updatedHistory = [...hist];
    updatedHistory.push(pos);

    return [updatedPosition, updatedArray, updatedHistory, null];
  };

  // validate current cell and back up one step
  const stepBack = (pos, arr, hist) => {
    // validate current cell
    const updatedCell = validateCell(pos, arr);

    // update array
    const updatedArray = [...arr];
    updatedArray[pos[1]][pos[0]] = updatedCell;

    // if we are at the last value of the history array, remove the value
    const updatedHistory = [...hist];
    if (arrayContainsCoord(updatedHistory[updatedHistory.length - 1], pos)) {
      updatedHistory.pop();
    }

    // update position to the end of the history array
    const updatedPosition = updatedHistory[updatedHistory.length - 1];

    return [updatedPosition, updatedArray, updatedHistory];
  };

  // get possible moves
  const moves = getAvailableMoves(currentPosition);

  // if no moves, step back one block
  if (moves.join('') === '0000') {
    return stepBack(currentPosition, currentArray, currentHistory);
  }

  // randomly pick an available move
  const chosenMove = pickMove(moves);

  // update the position, array, history and touched array
  const [updatedPosition, updatedArray, updatedHistory] = stepForward(
    currentPosition,
    currentArray,
    currentHistory,
    chosenMove
  );

  // return values for rendering and next loop
  return [updatedPosition, updatedArray, updatedHistory];
}
