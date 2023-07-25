import { MazeCellCoords, MazeCellValue, MazeObject } from '../types/types';

export function generateCoordinateKey(coords: MazeCellCoords): string {
  return `${coords.x}_${coords.y}`;
}

export function generateEmptyMazeObject(
  width: number,
  height: number
): MazeObject {
  const mazeObject: MazeObject = {};

  // loop all coordinates
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // empty cell and coord key from x/y
      const cellValue: MazeCellValue = '1111';
      const coordinateKey = generateCoordinateKey({ x, y });

      // Add the unique cell value to the maze object
      mazeObject[coordinateKey] = cellValue;
    }
  }

  return mazeObject;
}

export async function generateEmptyMazeObjectAsync(
  width: number,
  height: number
): Promise<MazeObject> {
  return generateEmptyMazeObject(width, height);
}
