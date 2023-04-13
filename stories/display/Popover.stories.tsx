import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Popover } from '../../src';

export default {
  component: Popover,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'Popover',
  },
};

const Template = args => (
  <StoryLayout>
    <Popover.Root>
      <Popover.Trigger>
        <Button>Hover me</Button>
      </Popover.Trigger>
      <Popover.Content size='sm' side='right'>hello world</Popover.Content>
    </Popover.Root>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
