import React from 'react';
//import ScoreKeeper from './ScoreKeeper';
//import IconList from './IconList';
//import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
	  <Lottery title='Mini Daily' mazNum={10} numBalls={4} />
		  
    </div>
  );
}

export default App;
