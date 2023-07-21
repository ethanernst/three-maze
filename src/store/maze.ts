import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  MazeSliceState,
  MazeCellValue,
  MazeCellCoords,
  MazeMatrix,
} from '../types/types';

const initialState: MazeSliceState = {
  width: 0,
  height: 0,
  start: { row: 0, column: 0 },
  maze: [],
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
      state.maze[coords.row][coords.column] = value;
    },
    setMaze: (state, action: PayloadAction<{ maze: MazeMatrix }>) => {
      const { maze } = action.payload;
      state.maze = maze;
    },
  },
});

export default mazeSlice.reducer;
export const { setCell, setMaze } = mazeSlice.actions;