import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.any,
    style: PropTypes.object,
    onClick: PropTypes.func,
  }

  render() {
    const numbers = [12, 3, 7, 9, 10, 5]

    for (let i = 0; i <= numbers.length - 2; i++) {
      let minValue = numbers[i]

      //console.log(minValue)

    }

    return (
      <div>Btn</div>
    )
  }
}

export default Button