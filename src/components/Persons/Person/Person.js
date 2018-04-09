import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../HOC/withClass';
import Aux from '../../../HOC/Aux';

class Person extends Component {
      constructor(props) {
    super(props);
    console.log('person.js inside consturctor ', props);
  }

  componentWillMount() {
    console.log('person.js inside componentWillMount ');
  }

  componentDidMount() {
    console.log('person.js inside componentDidMount()');
    if (this.props.position === 0) {
        this.inputElement.focus();
    }
  }

    render() {
        console.log('person.js inside render')
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                /* references only available in stateful components */
                    ref={(inp) => { this.inputElement = inp }}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);