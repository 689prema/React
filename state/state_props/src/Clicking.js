import React,{Component} from 'react';

class Clicking extends Component{
	constructor(props){
		super(props);
		this.state ={num:1};
		this.genRandom=this.genRandom.bind(this);
	}
	
	genRandom = (e) =>{
		let rand=Math.floor(Math.random() * this.props.maxNum) + 1;
		this.setState({num:rand});
	}
	
	render(){
		
		return(
		<div>
		  <h1> Number is :{this.state.num}</h1>
		  {this.state.num === 7 
		   ? <h2>YOU WIN!</h2>
		   : <button onClick ={this.genRandom}>Random Number</button>
		  }
		</div>
		);
	}
}
export default Clicking;

 // {this.state.num === 7 && <h2>YOU WIN!</h2>}
		  // {this.state.num !== 7 && <button onClick ={this.genRandom}>Random Number</button>}