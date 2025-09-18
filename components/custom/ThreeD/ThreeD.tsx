"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

function LogoModel() {
  const { scene } = useGLTF("/logo-red.glb"); // put model in /public
  return <primitive object={scene} scale={1} />;
}

export default function Logo3D() {
  return (
    <div className="w-[200px] h-[200px] mx-auto sm:max-w-[96%]">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Stage adds ground + shadows */}
        <Stage environment="city" intensity={0.6} shadows>
          <LogoModel />
        </Stage>

        {/* Mouse / pinch controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false} // no pan
          minPolarAngle={Math.PI / 2} // lock to horizontal
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
