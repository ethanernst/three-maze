import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateCoordinateKey, generateEmptyMazeObject } from './helpers';
import { MazeSliceState, MazeCellValue, MazeCellCoords } from '../types/types';

const initialState: MazeSliceState = {
  width: 0,
  height: 0,
  start: { x: 0, y: 0 },
  maze: {},
  solution: [],
};

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<MazeSliceState>) => {
      const { width, height, start, maze, solution } = action.payload;
      state.width = width;
      state.height = height;
      state.start = start;
      state.maze = maze;
      state.solution = solution;
    },
    setCellValue: (
      state,
      action: PayloadAction<{ coords: MazeCellCoords; value: MazeCellValue }>
    ) => {
      const { coords, value } = action.payload;
      const coordinateKey = generateCoordinateKey(coords);
      state.maze = { ...state.maze, [coordinateKey]: value };
    },
    buildNewMaze: (
      state,
      action: PayloadAction<{
        width: number;
        height: number;
        start: MazeCellCoords;
      }>
    ) => {
      const { width, height, start } = action.payload;
      state.width = width;
      state.height = height;
      state.start = start;
      state.maze = generateEmptyMazeObject(width, height);
      state.solution = [];
    },
  },
});

export default mazeSlice.reducer;
export const { setState, setCellValue, buildNewMaze } = mazeSlice.actions;
