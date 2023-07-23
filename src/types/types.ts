export type MazeCellValue = `${'0' | '1'}${'0' | '1'}${'0' | '1'}${'0' | '1'}`;

export type MazeCellCoords = { x: number; y: number };

export type MazeMap = Map<string, MazeCellValue>;

export type MazeSolution = MazeCellCoords[];

export interface RootState {
  mazeSlice: MazeSliceState;
}

export interface MazeSliceState {
  width: number;
  height: number;
  start: MazeCellCoords;
  maze: MazeMap;
  solution: MazeSolution | undefined;
}
