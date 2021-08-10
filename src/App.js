import './App.css';
import React from 'react';
import Todos from './TodoComponent/Todo';
import Header from './TodoComponent/Header';
import AddTodo from './TodoComponent/AddTodo';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

class App extends React.Component{

  state = {
   todos:[]
}

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  
       // markcomplete toggle 
       markComplete = (id) =>{
        this.setState({ todos: this.state.todos.map( todo =>{
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
          })
        });
      }

      // Delete button

      delBtn =(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        this.setState({ todos: [...this.state.todos.filter(todos => todos.id
          !== id)] });
      }

      // Add Todo

      addTodo = (title) =>{
        // const newTodo = {
        //   id: uuidv4(),
        //   title,
        //   completed: false
        // }
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
        })
        .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
        
      }
  render(){
    
    return (
      <div className="App">
          <div className="Container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} 
            delBtn={this.delBtn}/>
          </div>
      </div>
    );
  }
 
}

export default App;
