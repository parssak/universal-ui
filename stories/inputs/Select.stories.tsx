import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Select } from '../../src';
import { FRUITS } from '../utils/constants';
import { Icon } from '../../src/components/icons/Icon';

export default {
  component: Select,
  args: {
    disabled: false,
  },
};

const Template = args => (
  <StoryLayout>
    <Select {...args}>
      <Select.Trigger variant="outline" />
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

export const TrailingIcon = args => (
  <StoryLayout>
    <Select {...args}>
      <Select.Trigger
        trailingIcon={<Icon name="chevron-down" />}
        variant="outline"
      />
      <Select.Panel>
        {FRUITS.map((fruit, i) => (
          <Select.Item value={fruit} key={fruit} className="capitalize" disabled={i >= 3 && i < 6}>
            {fruit}
          </Select.Item>
        ))}
      </Select.Panel>
    </Select>
  </StoryLayout>
);
