import { createSelector } from 'reselect';

import { generateCoordinateKey } from './helpers';
import { RootState, MazeCellCoords, MazeCellValue } from '../types/types';

export const getMazeSliceState = createSelector(
  (state: RootState) => state.mazeSlice,
  mazeSliceState => mazeSliceState
);

export const getMazeParams = createSelector(
  [
    (state: RootState) => state.mazeSlice.width,
    (state: RootState) => state.mazeSlice.height,
    (state: RootState) => state.mazeSlice.start,
  ],
  (width, height, start) => {
    return { width, height, start };
  }
);

export const getMazeObject = createSelector(
  (state: RootState) => state.mazeSlice.maze,
  maze => maze
);

export const getCellValue = createSelector(
  [getMazeObject, (_: RootState, coords: MazeCellCoords) => coords],
  (maze, coords): MazeCellValue => {
    const coordinateKey = generateCoordinateKey(coords);
    return maze[coordinateKey];
  }
);

export const getSurroundingCellValues = createSelector(
  [(state: RootState, _) => state, (_, coords: MazeCellCoords) => coords],
  (state, coords): MazeCellValue[] => {
    const surroundingCells: MazeCellValue[] = [];

    surroundingCells.push(
      getCellValue(state, { x: coords.x, y: coords.y - 1 }), // up
      getCellValue(state, { x: coords.x, y: coords.y + 1 }), // down
      getCellValue(state, { x: coords.x - 1, y: coords.y }), // left
      getCellValue(state, { x: coords.x + 1, y: coords.y }) //right
    );

    return surroundingCells;
  }
);
