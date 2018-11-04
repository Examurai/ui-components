import React, {PureComponent} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import SPRITES_MAP from './sprite.js'
const DEFAULT_SIZE = 24

export default class Icon extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    title: PropTypes.string,
    onClick: PropTypes.func,
    classes: PropTypes.string,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    size: DEFAULT_SIZE,
  }

  render() {
    const {
      size,
      name,
      title,
      classes,
      onClick,
      ...others
    } = this.props

    const iconSize = {}

    /**
     *   Взависимости от размера иконки
     *   нужно подсчитать настоящие координаты со смещение,
     *   если иконка меньше чем viewport у спрайта
     */
    if (typeof size == 'number') {
      iconSize.width = size
      iconSize.height = size
    } else {
      iconSize.width = size.width
      iconSize.height = size.height
    }


    const icon = SPRITES_MAP[name] || SPRITES_MAP['updates']
    const iconPosition = {...icon}
    /**
     *   Если размер контейнера меньше чем
     *   сетка в спрайте, нужно высчитывать смещение
     *   относительно сетки
     */
    if (iconSize.width < DEFAULT_SIZE)
      iconPosition.x -= (DEFAULT_SIZE - iconSize.width) / 2

    if (iconSize.height < DEFAULT_SIZE)
      iconPosition.y -= (DEFAULT_SIZE - iconSize.height) / 2

    const style = {
      'width': `${iconSize.width}px`,
      'height': `${iconSize.height}px`,
      'backgroundPositionX': `${iconPosition.x}px`,
      'backgroundPositionY': `${iconPosition.y}px`,
    }

    //const containerClasses = cx('sprite-icon', classes)

    return (
      <div {...others}
           onClick={onClick}
           title={title}
           style={style}
           //className={containerClasses}
      />
    )
  }
}
