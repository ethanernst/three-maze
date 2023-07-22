import { createSelector } from 'reselect';

import { RootState, MazeMatrix, MazeCellCoords } from '../types/types';

export const getMazeMatrix = (state: RootState): MazeMatrix =>
  state.mazeSlice.maze;

export const getMazeCellValue = createSelector(
  [
    getMazeMatrix,
    (_: RootState, coords: MazeCellCoords): MazeCellCoords => ({
      row: coords.row,
      column: coords.column,
    }),
  ],
  (maze, { row, column }) => maze[row][column]
);
