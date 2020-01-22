import React, {Component} from "react";
//import NumberList from 'NumberList';

class NumberItem extends Component {
	render(){
		return(
			<li>
			  {this.props.value}
			   <button onClick={this.props.remove}> X </button>
			</li>
		);
	}
}

export default NumberItem;