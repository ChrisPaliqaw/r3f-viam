import type { Meta, StoryObj } from "@storybook/react";

import { Transform } from "./Transform";

const meta: Meta<typeof Transform> = {
  title: "Transform",
  component: Transform,
};

export default meta;

type Story = StoryObj<typeof Transform>

export const Visible: Story = {
  args: {
    name: "base_link",
    visible: true,
  },
};

export const Invisible: Story = {
  args: {
    name: "base_link",
    visible: false,
  },
};