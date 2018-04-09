import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('persons.js inside consturctor ', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('persons.js inside componentWillMount ');
  }

  componentDidMount() {
    console.log('persons.js inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log("Update Persons.js Inside componentWillReceiveProps", nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Update Persons.js inside shouldComponentUpdate", nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("Update Persons.js inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate () {
    console.log("Update Persons.js inside componentDidUpdate");
  }

    render() {
        console.log('persons.js inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
              click={() => this.props.clicked(index)}
              ref={this.lastPersonRef}
              authenticated={this.props.isAuthenticated}
              position={index}
              name={person.name}
              age={person.age}
              key ={person.id}
              changed={(event, id) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;