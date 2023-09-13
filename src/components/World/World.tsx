import { OrbitControls } from "@react-three/drei";

type WorldProps = {
  showGrid: boolean;
};

export function World({ showGrid }: WorldProps) {
  return (
    <>
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />{" "}
      {showGrid ? (
        <mesh scale={[1, 1, 1]} position={[0, 0, 0]}>
          <gridHelper args={[20, 20]} />
        </mesh>
      ) : null}
    </>
  );
}