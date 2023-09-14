import type { Meta, StoryObj } from "@storybook/react";

import { World } from "./World";

const meta: Meta<typeof World> = {
  title: "World",
  component: World,
};

export default meta;

type Story = StoryObj<typeof World>

export const ShowGridAndTransform: Story = {
  args: {
    showGrid: true,
    showTransform: true,
  },
};

export const HideGrid: Story = {
  args: {
    showGrid: false,
    showTransform: true,
  },
};

export const HideTransform: Story = {
  args: {
    showGrid: true,
    showTransform: false,
  },
};

