import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TabsContainer, TabsList, TabsItem} from './styles';

const OPTIONS = [
  {id: 0, title: 'Tab #1'},
  {id: 1, title: 'Tab #2'},
  {id: 2, title: 'Tab #3'},
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
      <TabsContainer>
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
      </TabsContainer>
    )
  }
}

// Example
export default class DefaultUseTabs extends Component {
  state = {
    tabId: 0
  }

  render() {
    let current = this.state.tabId
    return(
      <div>
        <Tabs
          active={current}
          onChangeTab={this.handleChangeTab}
          options={OPTIONS}
        />
        {this.state.tabId == 0 && <div>Hello, tab #1</div>}
        {this.state.tabId == 1 && <div>Hello, tab #2</div>}
      </div>
    )
  }

  handleChangeTab = (e) => {
    let id = e
    this.setState({
      tabId: id
    }, () => {console.log(this.state.tabId), 'tabId'})
  }
}