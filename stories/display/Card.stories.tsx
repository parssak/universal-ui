import React from 'react';
import { Text } from '../../src';
import StoryLayout from '../utils/StoryLayout';

export default {
  title: 'Card',
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {},
};

const Template = args => (
  <StoryLayout>
    <div className="">
      <Text variant="h1">Hello</Text>
    </div>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
