import { useState } from 'react';
import styled from 'styled-components';

type CellValue = `${'0' | '1'}${'0' | '1'}${'0' | '1'}${'0' | '1'}`;

interface CellValueProps {
  value: CellValue;
}

const Cell = styled.td`
  background-color: lightgray;
  width: 20px;
  height: 20px;
  padding: 0px;
`;

// key is in the format "x-y"
function MazeCell({ value }: CellValueProps) {
  const [cellValue, setCellValue] = useState(value || '1111');

  return <Cell id={cellValue} />;
}

export default MazeCell;
