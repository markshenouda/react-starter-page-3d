import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Logo2() {
  const { scene } = useGLTF("/logo.glb");
  const logo = useRef();
  scene.traverse((node) => {
    if (node.isMesh) {
      node.material.color.set("#61dafb");
      node.material.roughness = 0.01;
      node.material.metalness = 0.8;
    }
  });

  useFrame(({ clock }) => {
    logo.current.rotation.y = -clock.getElapsedTime();
  });
  return <primitive ref={logo} object={scene} position={[0, -1, 0]} />;
}

useGLTF.preload("/logo.glb");

export default Logo2;
