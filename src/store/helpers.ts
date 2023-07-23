import { MazeCellValue, MazeMap } from '../types/types';

// export function generateEmptyMaze(
//   width: number,
//   height: number
// ): MazeCellValue[][] {
//   const emptyMaze: MazeCellValue[][] = [];

//   for (let i = 0; i < width; i++) {
//     const row: MazeCellValue[] = [];
//     for (let j = 0; j < height; j++) {
//       row.push('1111' as MazeCellValue);
//     }
//     emptyMaze.push(row);
//   }

//   return emptyMaze;
// }

export function generateEmptyMazeMap(width: number, height: number): MazeMap {
  const mazeMap: MazeMap = new Map();

  // loop all coordinates
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // empty cell and coord key from x/y
      const cellValue: MazeCellValue = '1111';
      const coordinateKey: string = `${x}_${y}`;

      // just in case
      if (mazeMap.has(coordinateKey)) {
        throw new Error(`Duplicate coordinate key found: ${coordinateKey}`);
      }

      // Add the unique cell value to the maze map
      mazeMap.set(coordinateKey, cellValue);
    }
  }

  return mazeMap;
}
