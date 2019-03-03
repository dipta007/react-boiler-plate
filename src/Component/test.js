import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class test extends Component {
  render() {
    const { test1 } = this.state;
    return <div>{test1}</div>;
  }
}

test.propTypes = {};

export default test;

it('skip', () => {});
