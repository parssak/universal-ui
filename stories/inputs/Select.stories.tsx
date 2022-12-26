import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Select } from '../../src';

export default {
  component: Select,
  args: {
    children: 'hello world',
  },
};

const Template = args => (
  <StoryLayout>
    <Select {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
