import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button } from '../../src';

export default {
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    theme: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'warning',
          'info',
          'error',
          'purple',
        ],
      },
    },
  },
  args: {
    children: 'Button',
  },
};

const Template = args => (
  <StoryLayout>
    <Button {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
