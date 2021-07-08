import './App.css';

import Board from './Board';

function App({knightPosition}) {
  return (
    <Board knightPosition={knightPosition} />
  );
}

export default App;