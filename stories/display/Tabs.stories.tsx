import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Tabs, Card, Text } from '../../src';

export default {
  component: Tabs,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = args => (
  <StoryLayout>
    <Tabs.Root defaultValue='1'>
      <Tabs.List>
        <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className='p-size-x' value="1">
        <Text>Tab 1 content</Text>
      </Tabs.Content>
      <Tabs.Content className='p-size-x' value="2">
        <Text>Tab 2 content</Text>
      </Tabs.Content>
    </Tabs.Root>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
