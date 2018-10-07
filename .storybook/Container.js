import React, { Component } from 'react';

//import '../src/assets/common.css';
//import '../src/assets/fonts.css';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div>
        { story() }
      </div>
    );
  }
}