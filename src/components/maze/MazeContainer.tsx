import { styled } from 'styled-components';

import Cell from './MazeCell';

interface MazeContainerProps {
  width: number;
  height: number;
  start?: [x: number, y: number];
}

const Table = styled.table`
  border-collapse: collapse;
`;

function MazeContainer({ width, height }: MazeContainerProps) {
  const generateMaze: () => JSX.Element[] = () => {
    const cells: JSX.Element[] = [];

    for (let i = 0; i < height; i++) {
      const rowCells: JSX.Element[] = [];

      for (let j = 0; j < width; j++) {
        rowCells.push(<Cell key={`${j}-${i}`} value="1111" />);
      }

      cells.push(<tr key={i}>{rowCells}</tr>);
    }

    return cells;
  };

  return (
    <Table>
      <tbody>{generateMaze()}</tbody>
    </Table>
  );
}

export default MazeContainer;
