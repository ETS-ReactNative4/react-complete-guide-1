import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1lkalck', name: "Tom", age: 36},
      {id: '2lkaldk', name: "Jill", age: 30},
      {id: '3lkalab', name: "Joe", age: 28}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // slice here lets us copy the full persons array in state
    // const persons = this.state.persons.slice();

    // Or use the spread operator from ES6 which essentially creates a new array
    // that has the same info as the old array but is still different, equivalent to slice approach
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // record current showPersons value (from state) in a const before
    // using setState to assign showPersons property in state the opposite value
    const currentShowPersonsValue = this.state.showPersons;
    this.setState({showPersons: !currentShowPersonsValue})
  }



  render() {
    // this is for the button style, use inline styles whenever you want to scope the style
    // to make sure it only applies to a single type of element within a component
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #e25724',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {

            return <Person
          // Alternative to this would be click={this.deletePersonHandler.bind(this, index)}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key ={person.id}
              changed={(event, id) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }
    // <button onClick={() => this.switchNameHandler('Thomas')}>
    // return is implied but hidden after the fat arrow func only when on one line,
    // otherwise have to use curly braces
    // also this allows to pass data directly into the function call, but this can
    // be inefficient so dont use it if you dont have to, bind syntax is better

    // since this is all javascript, joining the css classes of this array separated by a space will
    // create a string of "red bold"
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle People</button>
      {/*Below is jsx that will only show if persons is set to true*/}
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is this a React App!!!!'));
  }
}

export default App;
