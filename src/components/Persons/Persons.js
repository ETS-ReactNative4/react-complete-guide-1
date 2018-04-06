import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
        return <Person
      // Alternative to this would be click={this.deletePersonHandler.bind(this, index)}
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key ={person.id}
          changed={(event, id) => props.changed(event, person.id)}/>
    });

export default persons;