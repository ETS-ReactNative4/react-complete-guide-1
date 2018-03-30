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

  switchNameHandler = (newName) => {
    console.log("switchNameHandler clicked/called")
    this.setState({persons: [
      {name: newName, age: 36},
      {name: "Jillian", age: 30},
      {name: "Joseph", age: 28}
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Tom", age: 36},
        {name: event.target.value, age: 30},
        {name: "Joe", age: 28}
      ]
    });
  }

  render() {
    // <button onClick={() => this.switchNameHandler('Thomas')}>
    // return is implied but hidden after the fat arrow func only when on one line,
    // otherwise have to use curly braces
    // also this allows to pass data directly into the function call, but this can
    // be inefficient so dont use it if you dont have to, bind syntax is better
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is working</p>
        <button onClick={() => this.switchNameHandler('Thomas')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Tommy')}
          changed={this.nameChangeHandler} >MY Hobbies inclue fortnite
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is this a React App!!!!'));
  }
}

export default App;
