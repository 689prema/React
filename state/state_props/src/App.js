import React,{Component} from 'react';
//import Game from './Game';
//import Demo from './Demo';
//import Rando from './Rando';
//import Button from './Button';
//import BrokenClick from './BrokenClick';
//import BrokenClick2 from './BrokenClick2';
import Clicking from './Clicking';
//import Clicker from './Clicker';
import './App.css';

class App extends Component{
	render(){
		return (
			<div className="App">
			<Clicking maxNum={10}/>
			</div>
		)
	}
}

export default App;
