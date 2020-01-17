import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const todos = [];


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      todoList: todos
    };
  }
on 
  toggleItem = id => {

    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
  
    this.setState({
      todoList: newTodoList
    });
  };
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  clearCompleted = () => {
    const newListCleared = this.state.todoList.filter(item => 
      item.completed === false
    )
    this.setState({
      todoList: newListCleared
    });
  }




  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addItem={this.addItem}  />
        <TodoList todos={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}  />

      </div>
    );
  }
}

export default App;