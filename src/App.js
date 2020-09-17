import React, { Component } from 'react';
import Header from './Components/Header';
// import ListDisplay from './Components/ListDisplay';
import './App.css';
import ListDisplay from './Components/ListDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Todd',
      todoList: ['Code the things', 'Eat', 'Sleep']
    }
      // binding methods insures proper context and is REQUIRED
      // variable to save new instance context
    this.changeUsername = this.changeUsername.bind(this);
  }
  changeUsername() {
    this.setState({ username: 'Eric' })
  }

  // Public Classfield Syntax
  properContext = () => {
    this.setState({username: 'Aaron'})
  }



  render() {
    const mappedTodos = this.state.todoList.map((todo, i) => {
      return (
        <ListDisplay key={i} todo={todo}/>
      )
    })
    return (
      <div className="App">
        <Header username={this.state.username}
          greeting='Hello World!'
          usernameFn={this.changeUsername}
          secondUsernameFn={this.properContext} />
        <h1>My To Do List</h1>
        {mappedTodos}
      </div>
    )
  }
}

export default App;
