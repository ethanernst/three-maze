// import { createSelector } from 'reselect';

import {
  RootState,
  MazeMap,
  MazeCellCoords,
  MazeCellValue,
} from '../types/types';

export const getMazeMap = (state: RootState): MazeMap => state.mazeSlice.maze;

export const getMazeCellValue = (
  state: RootState,
  coords: MazeCellCoords
): MazeCellValue | undefined => {
  const coordinateKey: string = `${coords.x}_${coords.y}`;
  return state.mazeSlice.maze.get(coordinateKey);
};

// export const getSurroundingCellValues = createSelector(
//   [
//     getMazeMatrix,
//     (_: RootState, coords: MazeCellCoords): MazeCellCoords => ({
//       row: coords.row,
//       column: coords.column,
//     }),
//   ],
//   (maze, { row, column }) => {
//     const surroundingCells: MazeCellCoords[] = [];

//     surroundingCells.push(maze[row - 1][column]); // up
//     surroundingCells.push(maze[row + 1][column]); // down
//     surroundingCells.push(maze[row][column - 1]); // left
//     surroundingCells.push(maze[row][column + 1]); // right
//     console.log(surroundingCells);
//   }
// );
