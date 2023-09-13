import type { Preview } from "@storybook/react";
import { Canvas } from "@react-three/fiber";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Canvas
        camera={{
          fov: 60,
          position: [-1, 1, 1],
        }}
        style={
          {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        }
      }
      >
        <color args={["ivory"]} attach="background" />
        <Story />
      </Canvas>
    ),
  ],
};

export default preview;
