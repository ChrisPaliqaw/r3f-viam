import type { Meta, StoryObj } from "@storybook/react";

import { Robot } from "./Robot";

const meta: Meta<typeof Robot> = {
  title: "Robot",
  component: Robot,
};

export default meta;

type Story = StoryObj<typeof Robot>

export const NoWireframe: Story = {
  args: {
    position: { x: 0, y: 0, z: 0 },
    wireframe: false,
    visible: true,
    showTransform: true,
  },
};

export const ZValueOffset: Story = {
  args: {
    position: { x: 0, y: 0, z: 0.75 },
    wireframe: false,
    visible: true,
    showTransform: true,
  },
};

export const Wireframe: Story = {
  args: {
    position: { x: 0, y: 0, z: 0 },
    wireframe: true,
    visible: true,
    showTransform: true,
  },
};

export const Invisible: Story = {
  args: {
    position: { x: 0, y: 0, z: 0 },
    wireframe: true,
    visible: false,
    showTransform: true,
  },
};

export const HideTransform: Story = {
  args: {
    position: { x: 0, y: 0, z: 0 },
    wireframe: false,
    visible: true,
    showTransform: false,
  },
};