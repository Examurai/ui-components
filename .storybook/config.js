import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Container from './Container';

addDecorator(story => <Container story={story}/>);

const componentStories = require.context('../src/components', true, /_stories\.jsx?$/);

function loadStories() {
  componentStories.keys().forEach(componentStories);
}

configure(loadStories, module);
