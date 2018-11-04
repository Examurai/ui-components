import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, Head, Title, Info, StageLine, StageItem, Dates} from './styles'

class Stage extends Component {
  static propTypes = {
    steps: PropTypes.object,
    name: PropTypes.string
  }

  static defaultProps = {
    steps: {},
  }

  getReadyStages = () => {
    let readyStages = 0
    this.props.steps.stages.map((item) => {
      if (item.start) {
        readyStages++
      }
    })
    return readyStages
  }

  getStages = () => {
    const {steps} = this.props
    const stageWidth = 100 / steps.stages.length + '%'

    const result = steps.stages.map((item, i) => {
      let color = 'inherit'

      if(item.start && item.timeLimit) {
        color = 'green'
      } else if (item.start && !item.timeLimit) {
        color = 'red'
      }
      return <StageItem key={i} style={{width: stageWidth, backgroundColor: color}}/>
    })

    return result
  }

  render() {
    const {steps, name} = this.props
    const finish = this.getReadyStages() === steps.stages.length
    const successColor = 'green'
    const failColor = 'inherit'
    const finishColor = finish ? successColor : failColor

    return(
      <Container>
        <Head>
          <Title>{name}</Title>
          <Info>Выполнено работ:&nbsp;
            <span style={{color: finishColor}}>{this.getReadyStages()}</span>&nbsp;
            <span style={{color: finishColor}}>из {steps.stages.length}</span>

          </Info>
        </Head>
        <StageLine>
          {this.getStages()}
        </StageLine>
        {!finish &&
          <Dates>
            <span>{steps.startDate !== null ? 'Начало: ' + steps.startDate : ''}</span>
            <span>{steps.finishDate !== null ? 'Завершение: ' + steps.finishDate : ''}</span>
          </Dates>
        }
      </Container>
    )
  }
}

export default Stage