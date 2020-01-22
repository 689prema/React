import React, {Component} from 'react';
import "./Coins.css";

class Coins extends Component{
	render(){
		return(
		<div className="Coins">
				<img src={this.props.info.imgSrc} alt={this.props.info.side}/>;
		</div>
		);
	}
}

export default Coins;