import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>My Name is {this.props.name}.</h1>
        <h1>My age is {this.props.age}</h1>
        {this.props.children}
      </div>
    )
  }
}

MyClass.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
}
