export type MazeCellValue = `${'0' | '1'}${'0' | '1'}${'0' | '1'}${'0' | '1'}`;

export type MazeCellCoords = { row: number; column: number };

export type MazeMatrix = MazeCellValue[][];

export type MazeSolution = MazeCellCoords[];

export interface RootState {
  mazeSlice: MazeSliceState;
}

export interface MazeSliceState {
  width: number;
  height: number;
  start: MazeCellCoords;
  maze: MazeMatrix;
  solution: MazeSolution | undefined;
}
