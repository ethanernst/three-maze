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

    for (let i = 0; i < height; i++) {
      const rowCells: JSX.Element[] = [];

      for (let j = 0; j < width; j++) {
        rowCells.push(
          <MazeCell key={`${i},${j}`} coords={{ row: i, column: j }} />
        );
      }

      cells.push(<tr key={i}>{rowCells}</tr>);
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
