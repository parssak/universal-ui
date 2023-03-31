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
    <Card {...args} data-override="true">
      <Card.Content>
        <div className="flex gap-size-x">
          <div className="bg-theme-base border-theme-muted p-2 border"></div>
          <div className="bg-theme-base border-theme-base p-2 border"></div>
          <div className="bg-theme-base border-theme-active p-2 border"></div>
          <Button>Hello World</Button>
          <Input />
        </div>
        <Text className="mt-size-2y">This is some regular text</Text>
      </Card.Content>
    </Card>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};


export const Rich = args => (
  <StoryLayout>
    <Card {...args}>
      <Card.Content>
        <Text variant='h3'>This is a Card</Text>
      </Card.Content>
      <Card.Content>
        <Text>This is some regular text</Text>
      </Card.Content>
      <Card.Content>
        <Text>This is some regular text</Text>
      </Card.Content>
    </Card>
  </StoryLayout>
)
