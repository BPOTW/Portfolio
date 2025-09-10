import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingSphere = ({ position, color, scale = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </Sphere>
    </Float>
  );
};

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        
        <FloatingSphere 
          position={[-3, 2, -2]} 
          color="#7dd3fc" 
          scale={0.8}
        />
        <FloatingSphere 
          position={[3, -1, -3]} 
          color="#86efac" 
          scale={1.2}
        />
        <FloatingSphere 
          position={[-2, -2, -1]} 
          color="#a7f3d0" 
          scale={0.6}
        />
        <FloatingSphere 
          position={[2, 3, -4]} 
          color="#bef264" 
          scale={0.9}
        />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};