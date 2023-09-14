import { Image } from "@react-three/drei";
import { Transform } from "../Transform";

// import { useControls } from 'leva'

interface RobotProps {
  position: { x: number; y: number; z: number };
  wireframe: boolean;
  visible: boolean;
  showTransform: boolean;
}

// import Transform from '../Transform/Transform'

export function Robot({
  position,
  wireframe,
  visible,
  showTransform,
}: RobotProps) {
  // Dimensions: L 32 cm x W 22 cm x H 7.5 cm
  const length = 0.32;
  const width = 0.22;
  const height = 0.075;
  const slightlyAboveSurface = 0.51;

  return (
    <mesh position={[position.x, position.z, position.y]}>
      <boxGeometry args={[length, height, width]} />
      <meshStandardMaterial
        color="dimgray"
        wireframe={wireframe}
        visible={visible}
      />
      <Image
        url="viam.png"
        rotation-x={Math.PI / -2}
        scale={0.1}
        position-y={height * slightlyAboveSurface}
        visible={visible && !wireframe}
      />
      <Transform name="base_link" visible={showTransform} />
    </mesh>
  );
}
