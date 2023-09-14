import React from "react";
import { Transform } from "../Transform";

type WorldProps = {
  children: React.ReactElement | React.ReactElement[];
  showGrid: boolean;
  showTransform: boolean;
};

export function World({ children, showGrid, showTransform}: WorldProps ) {
  return (
    <>
      <Transform name="world" visible={showTransform} />
      {showGrid ? (
        <mesh scale={[1, 1, 1]} position={[0, 0, 0]}>
          <gridHelper args={[20, 20]} />
        </mesh>
      ) : null}{children}</>
  );
}
