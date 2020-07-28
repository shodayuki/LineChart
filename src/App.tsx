import React from 'react';
import './App.css';
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from './components/BarPlot';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
    </div>
  );
}

export default App;
