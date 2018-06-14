/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Component from './';

storiesOf('Component', module)
  .add(
    'Test',
    withInfo(() => <Component />)({
      propTables: false,
      inline: true,
    })
  );
