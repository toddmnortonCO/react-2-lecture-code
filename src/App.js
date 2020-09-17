import React, {Component} from 'react';
import Header from './Components/Header';
import ListDisplay from './Components/ListDisplay';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Matt',
      todoList: ['Code the things', 'Eat', 'Sleep']
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <h1>My Todo List</h1>
      </div>
    )
  }
}

export default App;
