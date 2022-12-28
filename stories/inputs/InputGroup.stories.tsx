import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Input, Button, Select, InputGroup } from '../../src';
import { FRUITS } from '../utils/constants';

export default {
  component: InputGroup,
};

const Template = args => (
  <StoryLayout className="py-48">
    <InputGroup {...args}>
      <Button>Hello</Button>
      <Input placeholder="Your name here..." />
      <Select size={args.size}>
        <Select.Trigger placeholder='Pick a fruit' />
        <Select.Panel>
          {FRUITS.map(fruit => (
            <Select.Item value={fruit} key={fruit}>
              {fruit}
            </Select.Item>
          ))}
        </Select.Panel>
      </Select>
    </InputGroup>
  </StoryLayout>
);

export const Basic = Template.bind({});
