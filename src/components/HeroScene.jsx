import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingTorus({ position, speed = 1, color = '#CC0000', radius = 0.8, tube = 0.06 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
    mesh.current.rotation.y += 0.012 * speed;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
  });
  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[radius, tube, 16, 60]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

function RotatingPipe({ position, rotation, color = '#CC0000' }) {
  const mesh = useRef();
  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.004;
    mesh.current.rotation.y += 0.006;
  });
  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <cylinderGeometry args={[0.07, 0.07, 3, 16]} />
      <meshStandardMaterial color={color} metalness={0.85} roughness={0.15} />
    </mesh>
  );
}

function FloatingSphere({ position }) {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#CC0000"
        metalness={0.9}
        roughness={0.1}
        wireframe={false}
      />
    </mesh>
  );
}

function WireframeSphere() {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.6, 24, 24]} />
      <meshStandardMaterial color="#FF2200" metalness={0.5} roughness={0.5} wireframe />
    </mesh>
  );
}

function Particles() {
  const points = useRef();
  const count = 300;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      const t = Math.random();
      col[i * 3]     = 0.7 + t * 0.3;  // R
      col[i * 3 + 1] = 0;               // G
      col[i * 3 + 2] = 0;               // B
    }
    return [pos, col];
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return g;
  }, [positions, colors]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.018;
    points.current.rotation.x = state.clock.elapsedTime * 0.006;
  });

  return (
    <points ref={points} geometry={geo}>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.7} />
    </points>
  );
}

function SmallBox({ position, speed }) {
  const mesh = useRef();
  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.01 * speed;
    mesh.current.rotation.z += 0.008 * speed;
  });
  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial color="#CC0000" metalness={0.95} roughness={0.05} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-8, -8, -8]} intensity={1} color="#CC0000" />
      <pointLight position={[0, 5, 5]} intensity={1.5} color="#FF3300" />

      <FloatingSphere position={[0, 0, 0]} />
      <WireframeSphere />
      <Particles />

      <RotatingTorus position={[-3.5, 1, -2]} speed={0.7} color="#CC0000" radius={1} tube={0.07} />
      <RotatingTorus position={[3.5, -1, -1]} speed={1.1} color="#FF2200" radius={0.7} tube={0.06} />
      <RotatingTorus position={[0.5, 2.8, -3]} speed={0.5} color="#990000" radius={0.9} tube={0.05} />
      <RotatingTorus position={[-2, -2.5, -1]} speed={0.9} color="#FF4400" radius={0.6} tube={0.05} />

      <RotatingPipe position={[-2.8, 0.5, -1]} rotation={[0, 0, Math.PI / 4]} color="#CC0000" />
      <RotatingPipe position={[2.8, -0.5, -1]} rotation={[0, 0, -Math.PI / 4]} color="#FF1A1A" />
      <RotatingPipe position={[0.5, -2.5, 0]} rotation={[Math.PI / 5, 0.3, 0]} color="#AA0000" />

      <SmallBox position={[-4.5, 2, -2]} speed={1} />
      <SmallBox position={[4.5, -2, -2]} speed={-0.8} />
      <SmallBox position={[-1.5, -3.5, 0]} speed={1.3} />
      <SmallBox position={[3, 3, -3]} speed={0.7} />
    </Canvas>
  );
}
