import './preview.css';
import type { Preview } from "@storybook/react";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Canvas
        camera={{
          fov: 60,
          position: [-1, 1, 1],
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.25} />
        <OrbitControls enableDamping={true} makeDefault />
        <color args={["ivory"]} attach="background" />
        <Story />
      </Canvas>
    ),
  ],
};

export default preview;
