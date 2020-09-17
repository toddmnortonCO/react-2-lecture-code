import React, { Component } from 'react';
import Header from './Components/Header';
// import ListDisplay from './Components/ListDisplay';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Matt',
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
    return (
      <div className="App">
        <Header username={this.state.username}
          greeting='Hello World!'
          usernameFn={this.changeUsername}
          secondUsernameFn={this.properContext} />
        <h1>My Todo List</h1>
      </div>
    )
  }
}

export default App;
