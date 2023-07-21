import { configureStore } from '@reduxjs/toolkit';
import { mazeSlice } from './maze';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MazeCellCoords, MazeMatrix, MazeCellValue } from '../types/types';

// MAZE CONSTANTS (not changing for now, will worry about that later)
const WIDTH = 20;
const HEIGHT = 20;
const STARTING_POS: MazeCellCoords = { row: 0, column: 0 };

// temporary generation of random cell values for testing
const randomWall = (): '0' | '1' =>
  Math.floor(Math.random() * 2) === 0 ? '0' : '1';

const randomCell = (): MazeCellValue =>
  `${randomWall()}${randomWall()}${randomWall()}${randomWall()}`;

const generateDefaultMaze = (): MazeMatrix => {
  const generatedState: MazeMatrix = [];
  for (let i = 0; i < HEIGHT; i++) {
    const row: MazeCellValue[] = [];

    for (let j = 0; j < WIDTH; j++) {
      row.push(randomCell());
    }
    generatedState.push(row);
  }
  return generatedState;
};

const preloadedState = {
  width: WIDTH,
  height: HEIGHT,
  start: STARTING_POS,
  maze: generateDefaultMaze(),
  solution: [],
};

const store = configureStore({
  reducer: {
    mazeSlice: mazeSlice.reducer,
  },
  preloadedState: {
    mazeSlice: preloadedState,
  },
});

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
