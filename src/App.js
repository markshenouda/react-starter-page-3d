import "./App.css";
import { Canvas } from "@react-three/fiber";
import Logo from "./Logo";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas style={{ height: "60vh" }} camera={{ position: [0, 0, 3] }}>
          <ambientLight color={"#61dafb"} intensity={1} />
          <directionalLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
        </Canvas>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
