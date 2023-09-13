import { Canvas } from "@react-three/fiber";
import "./App.css";
import { World } from "./components/World";

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
          {/* {debugThree ? <Perf position="top-left" /> : null} */}

          <World showGrid={true} />
        </Canvas>
      </>
    </>
  );
}

export default App;
