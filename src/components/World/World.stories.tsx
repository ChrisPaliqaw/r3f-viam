import type { Meta, StoryObj } from "@storybook/react";

import { World } from "./World";

const meta: Meta<typeof World> = {
  title: "World",
  component: World,
};

export default meta;

type Story = StoryObj<typeof World>

export const ShowGrid: Story = {
  args: {
    showGrid: true,
  },
};

export const HideGrid: Story = {
  args: {
    showGrid: false,
  },
};