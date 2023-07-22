import { useAppSelector } from './store/store';

import MazeContainer from './components/maze/MazeContainer';
import Layout from './components/layout/Layout';
import { RootState } from './types/types';

function App() {
  const mazeParams = useAppSelector((state: RootState) => state.mazeSlice);
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
