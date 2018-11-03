import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

import Stage from './index'

const OPTIONS = [
  {
    name: 'Общестроительные работы',
    startDate: null,
    finishDate: null,
    stages: [
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
    ]
  },
  {
    name: 'Другие работы',
    startDate: null,
    finishDate: '24.02.2019',
    stages: [
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: false},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
      {start: true, timeLimit: true},
    ]
  },
  {
    name: 'Другие работы2',
    startDate: '24.02.2018',
    finishDate: '24.02.2019',
    stages: [
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
      {start: false},
    ]
  },
]

storiesOf('Stage', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      {OPTIONS.map((item, i) => {
        return <Stage steps={item} name={i + 1 + '. ' + item.name} key={i}/>
      })}
    </div>
  ))