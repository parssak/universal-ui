import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Card, Input, Text, ThemeProvider } from '../../src';

export default {
  args: {
    children: 'Card',
  },
  component: ThemeProvider,
};

const Template = args => (
  <StoryLayout>
    <ThemeProvider
      {...args}
      className="min-h-screen flex md:flex-row flex-col gap-size-4y"
    >
      <div className="flex flex-col gap-size-x">
        <section className="bg-theme-muted rounded p-size-2y">
          <span
            data-size="xs"
            className="rounded-full flex items-center w-max bg-theme-inverted text-theme-inverted px-size-4x py-size-2y leading-size font-mono text-size font-semibold tracking-wider"
          >
            <span className="inline-block relative -left-2 w-2 h-2 bg-theme-pure rounded-full"></span>
            IN PROGRESS
          </span>

          <Text
            variant="h4"
            className="flex items-center mt-size-2y gap-size-hx text-theme-active"
          >
            branch-name
          </Text>
          <Text
            variant="h6"
            className="flex items-center mt-size-qy gap-size-hx text-theme-muted"
          >
            commit-hash
          </Text>
          <Text size="sm" className="mt-size-4y text-theme-muted">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            architecto!
          </Text>
        </section>
        <section className="bg-theme-base rounded p-size-2y">
          <span
            data-size="xs"
            className="rounded-full flex items-center w-max bg-theme-inverted text-theme-inverted px-size-4x py-size-2y leading-size font-mono text-size font-semibold tracking-wider"
          >
            <span className="inline-block relative -left-2 w-2 h-2 bg-theme-pure rounded-full"></span>
            IN PROGRESS
          </span>

          <Text
            variant="h4"
            className="flex items-center mt-size-2y gap-size-hx text-theme-active"
          >
            branch-name
          </Text>
          <Text
            variant="h6"
            className="flex items-center mt-size-qy gap-size-hx text-theme-muted"
          >
            commit-hash
          </Text>
          <Text size="sm" className="mt-size-4y text-theme-muted">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            architecto!
          </Text>
        </section>
        <section className="bg-theme-active rounded p-size-2y">
          <span
            data-size="xs"
            className="rounded-full flex items-center w-max bg-theme-inverted text-theme-inverted px-size-4x py-size-2y leading-size font-mono text-size font-semibold tracking-wider"
          >
            <span className="inline-block relative -left-2 w-2 h-2 bg-theme-pure rounded-full"></span>
            IN PROGRESS
          </span>

          <Text
            variant="h4"
            className="flex items-center mt-size-2y gap-size-hx text-theme-active"
          >
            branch-name
          </Text>
          <Text
            variant="h6"
            className="flex items-center mt-size-qy gap-size-hx text-theme-muted"
          >
            commit-hash
          </Text>
          <Text size="sm" className="mt-size-4y text-theme-muted">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            architecto!
          </Text>
        </section>
        <section
          data-theme="success"
          className="bg-theme-active rounded p-size-2y"
        >
          <Text size="sm" className="font-medium">
            All checks have passed!
          </Text>
        </section>
        <section
          data-theme="warning"
          className="bg-theme-active rounded p-size-2y"
        >
          <Text size="sm" className="font-medium">
            Something needs your attention.
          </Text>
        </section>
        <section
          data-theme="error"
          className="bg-theme-active rounded p-size-2y"
        >
          <Text size="sm" className="font-medium">
            Your payment didn't go through.
          </Text>
        </section>
      </div>
      <main className="flex-1">
        <div className="container">
          <Text className="mb-4" variant="h1">
            Good Morning!
          </Text>
          <Card>
            <Card.Content className="flex flex-col gap-size-x">
              <div className="flex gap-size-x">
                <div className="bg-theme-base border-theme-muted p-2 border"></div>
                <div className="bg-theme-base border-theme-base p-2 border"></div>
                <div className="bg-theme-base border-theme-active p-2 border"></div>
              </div>
              <Button>Hello World</Button>
              <Input />
              <Text className="mt-size-2y">This is some regular text</Text>
            </Card.Content>
          </Card>
        </div>
      </main>
    </ThemeProvider>
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
