import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { mazeSlice } from './mazeSlice';
import { generateEmptyMaze } from './helpers';
import { MazeCellCoords } from '../types/types';

// MAZE CONSTANTS (not changing for now, will worry about that later)
const WIDTH = 20;
const HEIGHT = 20;
const STARTING_POS: MazeCellCoords = { row: 0, column: 0 };

const preloadedState = {
  width: WIDTH,
  height: HEIGHT,
  start: STARTING_POS,
  maze: generateEmptyMaze(WIDTH, HEIGHT),
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
