import type { Meta, StoryObj } from "@storybook/react";

import { World } from "./World";

const meta: Meta<typeof World> = {
  title: "World",
  component: World,
};

export default meta;

type Story = StoryObj<typeof World>

export const Primary: Story = {
  args: {
    showGrid: true,
  },
};
