import { useEffect } from 'react';

import MazeContainer from './components/maze/MazeContainer';
import Layout from './components/layout/Layout';

import { useAppDispatch, useAppSelector } from './store/store.ts';
import { setState } from './store/mazeSlice.ts';
import { generateEmptyMazeObjectAsync } from './store/helpers.ts';
import { getMazeSliceState } from './store/selectors.ts';
import { RootState, MazeCellCoords } from './types/types.ts';

// initial parameters
const WIDTH = 20;
const HEIGHT = 20;
const STARTING_POS: MazeCellCoords = { x: 0, y: 0 };

function App() {
  const dispatch = useAppDispatch();

  // generate initial maze state after the store has been initialized
  useEffect(() => {
    generateEmptyMazeObjectAsync(WIDTH, HEIGHT).then(generatedMazeObj => {
      dispatch(
        setState({
          width: WIDTH,
          height: HEIGHT,
          start: STARTING_POS,
          maze: generatedMazeObj,
          solution: [],
        })
      );
    });
  }, []);

  const mazeParams = useAppSelector((state: RootState) =>
    getMazeSliceState(state)
  );
  console.log(mazeParams);

  return (
    <Layout>
      <MazeContainer
        width={mazeParams.width}
        height={mazeParams.height}
        start={mazeParams.start}
      />
    </Layout>
  );
}

export default App;
