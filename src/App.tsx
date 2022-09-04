import React from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import ScatterGraph from './components/ScatterGraph';
import graphdata from './Wine-Data.json'

function App() {
  return (
    <div className="App">
      <div className="graph-wrapper">
        <ScatterGraph graphdata={graphdata} />
        <BarGraph graphdata={graphdata} />
      </div>
    </div>
  );
}

export default App;
