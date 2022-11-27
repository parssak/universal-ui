import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Input } from '../../src';

export default {
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
  },
};

const Template = args => (
  <StoryLayout>
    <Button {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  children: 'Back',
  leadingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  children: 'Next',
  trailingIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const CenterButton = Template.bind({});
CenterButton.args = {
  children: undefined,
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const Group = args => (
  <StoryLayout>
    <Button.Group {...args}>
      <Button>Discussions</Button>
      <Button>Send Invoice</Button>
      <Button>Inbox</Button>
    </Button.Group>
  </StoryLayout>
);

export const GroupWithIcon = args => (
  <StoryLayout>
    <Button.Group {...args}>
      <Button>Inbox</Button>
      <Button
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
    </Button.Group>
  </StoryLayout>
);

export const GroupWithInput = args => (
  <StoryLayout>
    <Button.Group {...args}>
      <Input />
      <Button>Join Waitlist</Button>
    </Button.Group>
  </StoryLayout>
);
