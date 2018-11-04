import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ display: 'flex'}}>
      <Button
        text={'hello'}
      />
    </div>
  ))