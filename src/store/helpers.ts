import { MazeCellValue } from '../types/types';

export function generateEmptyMaze(
  width: number,
  height: number
): MazeCellValue[][] {
  const emptyMaze: MazeCellValue[][] = [];

  for (let i = 0; i < width; i++) {
    const row: MazeCellValue[] = [];
    for (let j = 0; j < height; j++) {
      row.push('1111' as MazeCellValue);
    }
    emptyMaze.push(row);
  }

  return emptyMaze;
}
