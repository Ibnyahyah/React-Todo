import './App.css';
import React from 'react';
import Todos from './TodoComponent/Todo';
import Header from './TodoComponent/Header';
import AddTodo from './TodoComponent/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component{

  state = {
   todos:[
    {
      id: uuidv4(),
      title: 'I will know React in sha Allah',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Full javaScript Developer soon',
      completed: false
    }, 
    {
      id:uuidv4(),
      title: 'Lets Wait for Rahaman to act',
      completed: false
    },
  ]
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
        this.setState({ todos: [...this.state.todos.filter(todos => todos.id
          !== id)] });
      }

      // Add Todo

      addTodo = (title) =>{
        const newTodo = {
          id: uuidv4(),
          title,
          completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]});
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
