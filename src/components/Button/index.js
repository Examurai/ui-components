import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from '../IconSprite'
import {ButtonContainer} from './styles'

class Button extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.any,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    onClick: () => onClick
  }

  render() {
    const {
      disabled,
      text,
      icon,
      type
    } = this.props

    return (
      <ButtonContainer>
        {/*<Icon name={'arrow-left'}/>*/}
        <span>{text}</span>
      </ButtonContainer>
    )
  }
}

export default Button