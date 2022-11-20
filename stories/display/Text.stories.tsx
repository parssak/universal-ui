import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Text } from '../../src';

export default {
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'body1',
          'body2',
          'button',
          'caption',
          'label',
          'code',
        ],
      },
    },
  },
  args: {
    children: 'lorem ipsum dolor sit amet',
  },
};

const Template = args => (
  <StoryLayout className="grid gap-4">
    <Text {...args} />
    <Text {...args} variant="h1">
      Welcome back, John Doe.
    </Text>
    <Text {...args} variant="h2">
      Get Started Today
    </Text>
    <Text {...args} variant="h3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, deleniti?
    </Text>
    <Text {...args} variant="h4">
      h4 text
    </Text>
    <Text {...args} variant="h5">
      h5 text
    </Text>
    <Text {...args} variant="h6">
      h6 text
    </Text>
    <Text {...args} variant="body1">
      body1 text
    </Text>
    <Text {...args} variant="body2">
      body2 text
    </Text>
    <Text {...args} variant="button">
      button text
    </Text>
    <Text {...args} variant="caption">
      caption text
    </Text>
    <Text {...args} variant="label">
      label text
    </Text>
    <div>
      <Text>
        To run this command use:{' '}
        <Text {...args} variant="code">
          run hello world
        </Text>
      </Text>
    </div>
    <div>
      <Text>
        Or run the shortcut with:{' '}
        <span className="inline-flex items-center space-x-0.5">
          <Text {...args} variant="kbd">
            ⌘
          </Text>
          <Text {...args} variant="kbd">
            ⇧
          </Text>
          <Text {...args} variant="kbd">
            K
          </Text>
        </span>
      </Text>
    </div>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
