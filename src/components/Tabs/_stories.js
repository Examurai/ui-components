import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, text, boolean} from '@storybook/addon-knobs/react';

import DefaultUseTabs from './index';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DefaultUseTabs/>
  ))

