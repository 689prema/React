import React,{Component} from 'react';


class Todo extends Component {
	state = {
		todos:[
			{
				id:1,
				title:'Take out the trash',
				completed:false
			},
			{
				id:2,
				title:'Dinner with family',
				completed:false
			},
			{
				id:3,
				title:'Gym',
				completed:false
			}
		]
	}
 render(){
	 // console.log(this.state.todos);
  return (
    <div className="App">
      <Todo todos={this.state.todos} />
    </div>
  );
}
}
export default Todo;