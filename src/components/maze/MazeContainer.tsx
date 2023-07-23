import { styled } from 'styled-components';

import MazeCell from './MazeCell';
import { MazeCellCoords } from '../../types/types';

interface MazeContainerProps {
  width: number;
  height: number;
  start?: MazeCellCoords;
}

// styling
const Table = styled.table`
  border-collapse: collapse;
`;

function MazeContainer({ width, height }: MazeContainerProps) {
  const initializeMaze: () => JSX.Element[] = () => {
    const cells: JSX.Element[] = [];

    for (let y = 0; y < height; y++) {
      const rowCells: JSX.Element[] = [];

      for (let x = 0; x < width; x++) {
        rowCells.push(<MazeCell key={`${x},${y}`} coords={{ x: x, y: y }} />);
      }

      cells.push(<tr key={y}>{rowCells}</tr>);
    }

    return cells;
  };

  return (
    <Table>
      <tbody>{initializeMaze()}</tbody>
    </Table>
  );
}

export default MazeContainer;
