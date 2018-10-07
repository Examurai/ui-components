import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.any,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    return (
      <div>Btn</div>
    )
  }
}

export default Button