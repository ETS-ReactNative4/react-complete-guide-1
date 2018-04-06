import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

    let persons = null;


    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
      );


    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'is this a React App!!!!'));
  }
}

export default App;
