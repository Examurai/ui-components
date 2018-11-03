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
    this.props.steps.stages.map((item, i) => {
      if (item.start) {
        readyStages++
      }
    })
    return readyStages
  }

  render() {
    const {steps, name} = this.props
    const stageWidth = 100 / steps.stages.length + '%'
    const finish = this.getReadyStages() === steps.stages.length

    return(
      <Container>
        <Head>
          <Title>{name}</Title>
          <Info>Выполнено работ:&nbsp;
            <span>{this.getReadyStages()}</span>
            &nbsp;из {steps.stages.length}
          </Info>
        </Head>
        <StageLine>
          {steps.stages.map((item, i) => {
            let color = 'inherit'

            if(item.start && item.timeLimit) {
              color = 'green'
            } else if (item.start && !item.timeLimit) {
              color = 'red'
            }

            return <StageItem key={i} style={{width: stageWidth, backgroundColor: color}}/>
          })}
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