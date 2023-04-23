import React, { useState } from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Input, Dialog, Text, Select } from '../../src';

export default {
  component: Dialog,
};

const Template = args => {
  const [open, setOpen] = useState(false);
  return (
    <StoryLayout>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...args} open={open} onOpenChange={setOpen}>
        <Dialog.Content>
          <Dialog.Title>Edit Profile</Dialog.Title>
          <Dialog.Description className="mt-size-2y">
            Make changes to your profile here.
          </Dialog.Description>

          <label className="grid grid-cols-4 items-center gap-size-x mt-size-4y ">
            <Text size="sm" as="span" className="font-medium  text-right">
              Name
            </Text>
            <Input className="col-span-3 w-full" />
          </label>
          <label className="grid grid-cols-4 items-center gap-size-x mt-size-2y ">
            <Text size="sm" as="span" className="font-medium  text-right">
              Username
            </Text>
            <Input className="col-span-3 w-full" />
          </label>
          <div className="my-auto py-size-x">
            <Select>
              <Select.Trigger className="w-full" />
              <Select.Panel>
                <Select.Item value="everything">Everything</Select.Item>
                <Select.Item value="some-things">Some things</Select.Item>
                <Select.Item value="nothing">Nothing</Select.Item>
              </Select.Panel>
            </Select>
          </div>
          <div className="flex justify-end mt-6">
            <Button theme="brand">Save changes</Button>
          </div>
        </Dialog.Content>
      </Dialog>
    </StoryLayout>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
