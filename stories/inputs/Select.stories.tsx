import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Select } from '../../src';
import { FRUITS } from '../utils/constants';

export default {
  component: Select,
  args: {
    disabled: false,
  },
};

const Template = args => (
  <StoryLayout>
    <Select {...args}>
      <Select.Trigger />
      <Select.Panel>
        {FRUITS.map(fruit => (
          <Select.Item value={fruit} key={fruit} className="capitalize">
            {fruit}
          </Select.Item>
        ))}
      </Select.Panel>
    </Select>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
