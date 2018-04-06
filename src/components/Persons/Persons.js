import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('persons.js inside consturctor ', props);
  }

  componentWillMount() {
    console.log('persons.js inside componentWillMount ');
  }

  componentDidMount() {
    console.log('persons.js inside componentDidMount()');
  }
    render() {
        console.log('persons.js inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key ={person.id}
              changed={(event, id) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;