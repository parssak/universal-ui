import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button } from '../../src';

export default {
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
  },
};

const Template = args => (
  <StoryLayout>
    <Button {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
