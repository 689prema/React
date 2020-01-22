import React, {Component} from "react";
import Die from './Die';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix } from '@fortawesome/free-solid-svg-icons';

class RollDice extends Component{
	constructor(props){
		super(props);
		this.state = {die1:"one",die2:"one"};
	}
	render(){
		return(
			<div>
			<Die icon={this.state.die1}/>
			<Die icon={this.state.die2} />
			</div>
		);
	}
}

export default RollDice;