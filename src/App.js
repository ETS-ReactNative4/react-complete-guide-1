import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Tom", age: 36},
      {name: "Jill", age: 30},
      {name: "Joe", age: 28}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>MY Hobbies inclue fortnite </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is this a React App!!!!'));
  }
}

export default App;
