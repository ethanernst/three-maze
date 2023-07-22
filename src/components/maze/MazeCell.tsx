import { styled } from 'styled-components';
import { useAppSelector } from '../../store/store';
import { getMazeCellValue } from '../../store/selectors';
import { MazeCellCoords, RootState } from '../../types/types';

interface MazeCellProps {
  coords: MazeCellCoords;
}

// styling
const Cell = styled.td`
  background-color: lightgray;
  width: 20px;
  height: 20px;
  padding: 0px;
`;

function MazeCell({ coords }: MazeCellProps) {
  const cellValue = useAppSelector((state: RootState) =>
    getMazeCellValue(state, coords)
  );

  return <Cell id={cellValue} />;
}

export default MazeCell;
