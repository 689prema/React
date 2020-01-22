import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix } from '@fortawesome/free-solid-svg-icons';
import "./Die.css";

class Die extends Component{
	render(){
		return (
			<div>
				<h1>Die</h1>
			    <FontAwesomeIcon icon={faDiceOne} className="Die one"/>
				 <FontAwesomeIcon icon={faDiceTwo} className="Die two"/>
				<FontAwesomeIcon icon={faDiceThree} className="Die three"/>
				<FontAwesomeIcon icon={faDiceFour} className="Die four"/>
				<FontAwesomeIcon icon={faDiceFive} className="Die five"/>
				<FontAwesomeIcon icon={faDiceSix} className="Die six"/> 
				 
			</div>
			);
	}
}

export default Die;