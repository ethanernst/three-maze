import MazeContainer from './components/maze/MazeContainer';
import Layout from './components/layout/Layout';

import './App.css';

const WIDTH: number = 35;
const HEIGHT: number = 35;
const STARTING_POS: [x: number, y: number] = [0, 0];

function App() {
  return (
    <Layout>
      <MazeContainer width={WIDTH} height={HEIGHT} start={STARTING_POS} />
    </Layout>
  );
}

export default App;
