import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { TextArea } from '../../src';

export default {
  component: TextArea,
  args: {
    placeholder: "Add your text here",
    disabled: false
  }
};

const Template = args => (
  <StoryLayout>
    <TextArea {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};


export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  leadingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"

      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>

  ),
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
};