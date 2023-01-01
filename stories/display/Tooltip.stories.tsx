import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Tooltip } from '../../src';

export default {
  component: Tooltip,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'Tooltip',
  },
};

const Template = args => (
  <StoryLayout>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content size='sm' side='right'>hello world</Tooltip.Content>
    </Tooltip.Root>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
