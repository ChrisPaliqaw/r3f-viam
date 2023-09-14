import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { World } from "./components/World";
import { Robot } from "./components/Robot";

function App() {
  return (
    <>
      <p>Robot Window</p>
      <>
        {/* <Leva collapsed={false} /> */}
        <Canvas
          camera={{
            fov: 60,
            position: [-1, 1, 1],
          }}
        >
          <color args={["ivory"]} attach="background" />
          <World showGrid={true}>
            <Robot
              position={new THREE.Vector3(0.1, 0, 0.075 * 0.5)}
              wireframe={true}
              visible={true}
            />
          </World>
        </Canvas>
      </>
    </>
  );
}

export default App;
