export type MazeCellValue =
  | `${'0' | '1'}${'0' | '1'}${'0' | '1'}${'0' | '1'}`
  | undefined;

export type MazeCellCoords = { x: number; y: number };

export type MazeObject = { [key: string]: MazeCellValue };

export type MazeSolution = MazeCellCoords[];

export interface RootState {
  mazeSlice: MazeSliceState;
}

export interface MazeSliceState {
  width: number;
  height: number;
  start: MazeCellCoords;
  maze: MazeObject;
  solution: MazeSolution | undefined;
}
