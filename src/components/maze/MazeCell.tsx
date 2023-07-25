import { styled } from 'styled-components';

import { useAppSelector } from '../../store/store';
import { getCellValue, getSurroundingCellValues } from '../../store/selectors';
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
    getCellValue(state, coords)
  );

  if (coords.x === 0 && coords.y === 0) {
    console.log(coords, cellValue);
    console.log(
      useAppSelector((state: RootState) =>
        getSurroundingCellValues(state, coords)
      )
    );
  }

  return <Cell id={cellValue || '1111'} />;
}

export default MazeCell;
