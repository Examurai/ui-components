import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TabsList, TabsItem} from "./styles";

const OPTIONS = [
  {id: 0, title: 'Tab #1'},
  {id: 1, title: 'Tab #2'},
]

class Tabs extends Component {
  static propTypes = {
    options: PropTypes.array,
    onChangeTab: PropTypes.func,
    active: PropTypes.any
  }

  static defaultProps = {
    options: [],
  }

  render() {
    const {options, onChangeTab, active} = this.props
    return (
      <TabsList>
        {options.map((item, key) => {
          return (
            <TabsItem
              className={item.id === active && 'selected '}
              key={key}
              onClick={() => onChangeTab(item.id)}
            >
              <span>{item.title}</span>
            </TabsItem>
          )
        })}
      </TabsList>
    )
  }
}

// Example
export default class DefaultUseTabs extends Component {
  state = {
    type: 0
  }

  render() {
    let current = this.state.type
    return(
      <div>
        <Tabs
          active={current}
          onChangeTab={this.handleChangeTab}
          options={OPTIONS}
        />
        {this.state.type == 0 && <div>Hello, tab #1</div>}
        {this.state.type == 1 && <div>Hello, tab #2</div>}
      </div>
    )
  }

  handleChangeTab = (e) => {
    let type = e
    this.setState({
      type: type
    }, () => {console.log(this.state.type), 'type'})
  }
}