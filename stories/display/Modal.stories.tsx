import React, { useState } from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Button, Input, Modal, Text } from '../../src';

export default {
  component: Modal,
};

const Template = args => {
  const [open, setOpen] = useState(false);
  return (
    <StoryLayout>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onOpenChange={setOpen}>
        <Modal.Content>
          <Modal.Title>Edit Profile</Modal.Title>
          <Modal.Description className="mt-size-2y">
            Make changes to your profile here.
          </Modal.Description>

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
          <div className="flex justify-end mt-6">
            <Button theme="brand">Save changes</Button>
          </div>
        </Modal.Content>
      </Modal>
    </StoryLayout>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
