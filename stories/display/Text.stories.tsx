import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Text } from '../../src';

export default {
  component: Text,
  args: {
    children: 'Text',
  },
};

const Template = args => (
  <StoryLayout>
    <Text {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};

const RichTemplate = args => {
  const getSmallerSize = size => {
    const smaller = {
      xs: 'xs',
      sm: 'xs',
      md: 'sm',
      lg: 'md',
      xl: 'lg',
    };

    return smaller[size];
  };

  return (
    <StoryLayout>
      <Text {...args} variant="h1">
        This is a dummy article
      </Text>
      <Text {...args} variant="h2" className="mt-6">
        What is this about?
      </Text>
      <Text {...args} className="mt-4">
        This article is essentially about nothing. It is a dummy article that is
        used to test the Text component.
      </Text>

      <Text {...args} className="leading-loose">
        To activate the{' '}
        <Text {...args} variant="code" size={getSmallerSize(args.size)}>
          Command Pallette
        </Text>
        , press{' '}
        <span className="space-x-[3px]">
          <Text {...args} variant="kbd" size={getSmallerSize(args.size)}>
            Ctrl
          </Text>
          <Text {...args} variant="kbd" size={getSmallerSize(args.size)}>
            Shift
          </Text>
          <Text {...args} variant="kbd" size={getSmallerSize(args.size)}>
            P
          </Text>
        </span>
      </Text>

      <Text {...args} variant="h3" className="mt-4">
        How to use it
      </Text>

      <Text {...args} className="mt-2">
        To use this component, you can simply import it from the{' '}
        <Text {...args} variant="code" size={getSmallerSize(args.size)}>
          @universal-ui/react
        </Text>{' '}
        package.
      </Text>

      <Text {...args} className="mt-1">
        You can also use the{' '}
        <Text {...args} variant="code" size={getSmallerSize(args.size)}>
          Text
        </Text>{' '}
        component to render{' '}
        <Text {...args} variant="code" size={getSmallerSize(args.size)}>
          code
        </Text>{' '}
        and{' '}
        <Text {...args} variant="code" size={getSmallerSize(args.size)}>
          keyboard shortcuts
        </Text>
        .
      </Text>

      <Text {...args} variant="h4" className="mt-4">
        Smaller heading
      </Text>
      <Text {...args} variant="h5" className="mt-4">
        Even Smaller heading
      </Text>
      <Text {...args} variant="h6" className="mt-4">
        Smallest heading
      </Text>
    </StoryLayout>
  );
};

export const Rich = RichTemplate.bind({});
Rich.args = {
  size: 'md',
};

export const SidebarTemplate = args => (
  <StoryLayout>
    <div className="w-72 bg-theme-pure p-size-2y">
      <span
        data-size="xs"
        className="rounded-full flex items-center w-max bg-theme-inverted text-theme-inverted px-size-4x py-size-2y leading-size font-mono text-size font-semibold tracking-wider"
      >
        <span className="inline-block relative -left-2 w-2 h-2 bg-theme-pure rounded-full"></span>
        IN PROGRESS
      </span>

      <Text
        {...args}
        variant="h4"
        className="flex items-center mt-size-2y gap-size-hx text-theme-active"
      >
        branch-name
      </Text>
      <Text
        {...args}
        variant="h6"
        className="flex items-center mt-size-qy gap-size-hx text-theme-muted"
      >
        commit-hash
      </Text>
      <Text {...args} size="sm" className="mt-size-4y">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
        architecto!
      </Text>
    </div>
  </StoryLayout>
);
