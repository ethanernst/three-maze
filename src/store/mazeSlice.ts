import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateEmptyMazeMap } from './helpers';
import { MazeSliceState, MazeCellValue, MazeCellCoords } from '../types/types';

const initialState: MazeSliceState = {
  width: 0,
  height: 0,
  start: { x: 0, y: 0 },
  maze: new Map(),
  solution: [],
};

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    setCell: (
      state,
      action: PayloadAction<{ coords: MazeCellCoords; value: MazeCellValue }>
    ) => {
      const { coords, value } = action.payload;
      const coordinateKey: string = `${coords.x}_${coords.y}`;
      state.maze.set(coordinateKey, value);
    },
    clearMaze: (
      state,
      action: PayloadAction<{
        width: number;
        height: number;
        start: MazeCellCoords;
      }>
    ) => {
      const { width, height, start } = action.payload;
      state.start = start;
      state.maze = generateEmptyMazeMap(width, height);
    },
  },
});

export default mazeSlice.reducer;
export const { setCell, clearMaze } = mazeSlice.actions;
