import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Card, Input, Text } from '../../src';

export default {
  component: Card,
  args: {
    children: 'Card',
  },
};

const Template = args => (
  <StoryLayout>
    <Card {...args} data-override="true">
      <Card.Content>
        <div className="flex gap-size-x">
          <div className="bg-theme-base border-theme-muted p-2 border"></div>
          <div className="bg-theme-base border-theme-base p-2 border"></div>
          <div className="bg-theme-base border-theme-active p-2 border"></div>
          <Button>Hello World</Button>
          <Input />
        </div>
        <Text className="mt-size-2y">This is some regular text</Text>
      </Card.Content>
    </Card>
    <div className="grid grid-cols-4 gap-5">
      <div data-theme="brand">
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-pure border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Pure </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-pure
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-base border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Base </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-base
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-muted border border-theme-muted flex w-full justify-between">
          <Text className="font-medium text-theme-muted">Muted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-muted
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-active border border-theme-active flex w-full justify-between">
          <Text className="text-theme-active font-medium">Active </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-active
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-inverted border border-theme-inverted flex w-full justify-between">
          <Text className="text-theme-inverted font-medium">Inverted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-inverted
            </Text>
          </div>
        </div>
      </div>
      <div data-theme="error">
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-pure border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Pure </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-pure
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-base border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Base </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-base
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-muted border border-theme-muted flex w-full justify-between">
          <Text className="font-medium text-theme-muted">Muted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-muted
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-active border border-theme-active flex w-full justify-between">
          <Text className="text-theme-active font-medium">Active </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-active
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-inverted border border-theme-inverted flex w-full justify-between">
          <Text className="text-theme-inverted font-medium">Inverted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-inverted
            </Text>
          </div>
        </div>
      </div>
      <div data-theme="success">
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-pure border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Pure </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-pure
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-base border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Base </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-base
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-muted border border-theme-muted flex w-full justify-between">
          <Text className="font-medium text-theme-muted">Muted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-muted
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-active border border-theme-active flex w-full justify-between">
          <Text className="text-theme-active font-medium">Active </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-active
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-inverted border border-theme-inverted flex w-full justify-between">
          <Text className="text-theme-inverted font-medium">Inverted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-inverted
            </Text>
          </div>
        </div>
      </div>
      <div data-theme="neutral">
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-pure border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Pure </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-pure
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-base border border-theme-base flex w-full justify-between">
          <Text className="font-medium">Base </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-base
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-muted border border-theme-muted flex w-full justify-between">
          <Text className="font-medium text-theme-muted">Muted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-muted
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-active border border-theme-active flex w-full justify-between">
          <Text className="text-theme-active font-medium">Active </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-active
            </Text>
          </div>
        </div>
        <div className="py-size-2y md:py-size-4y px-size-2x mt-size-y rounded bg-theme-inverted border border-theme-inverted flex w-full justify-between">
          <Text className="text-theme-inverted font-medium">Inverted </Text>
          <div className="ml-auto pl-4">
            <Text variant="code" size="sm">
              bg-theme-inverted
            </Text>
          </div>
        </div>
      </div>
    </div>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Rich = args => (
  <StoryLayout>
    <Card {...args}>
      <Card.Content>
        <Text variant="h3">This is a Card</Text>
      </Card.Content>
      <Card.Content>
        <Text>This is some regular text</Text>
      </Card.Content>
      <Card.Content>
        <Text>This is some regular text</Text>
      </Card.Content>
    </Card>
  </StoryLayout>
);
