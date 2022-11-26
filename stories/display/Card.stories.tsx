import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Card, Input, Text } from '../../src';

export default {
  component: Card,
  args: {
    children: 'Card',
  },
};

const Template = args => (
  <StoryLayout>
    <Card {...args}>
      <div className="space-x-size-x">
        <Button>Hello World</Button>
        <Input />
      </div>
      <Text className="mt-size-2y">This is some regular text</Text>
    </Card>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
