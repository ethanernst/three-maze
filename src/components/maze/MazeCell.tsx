import { useSelector } from 'react-redux';
import { getMazeCellValue } from '../../store/selectors';
import { styled } from 'styled-components';

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
  const cellValue = useSelector((state: RootState) =>
    getMazeCellValue(state, coords)
  );

  return <Cell id={cellValue} />;
}

export default MazeCell;
