import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 4500;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = Math.pow(Math.random(), 0.65) * 13;
      const angle = Math.random() * Math.PI * 2;

      data[i3] =
        Math.cos(angle) * radius +
        (Math.random() - 0.5) * 3;

      data[i3 + 1] =
        (Math.random() - 0.5) * 14;

      data[i3 + 2] =
        Math.sin(angle) * radius -
        3;
    }

    return data;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * 0.008;

    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.05) *
      0.025;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.022}
        color="#8ceeff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Nebula() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const pulse =
      1 +
      Math.sin(state.clock.elapsedTime * 0.45) *
        0.035;

    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[4.8, 48, 48]} />

        <meshBasicMaterial
          color="#008ca8"
          transparent
          opacity={0.018}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[3.5, 48, 48]} />

        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.3, 48, 48]} />

        <meshBasicMaterial
          color="#6d55ff"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Core() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    const pulse =
      1 + Math.sin(t * 1.2) * 0.045;

    group.current.scale.setScalar(pulse);

    group.current.rotation.y =
      t * 0.08;
  });

  return (
    <group ref={group}>
      {/* Outer energy shell */}
      <mesh>
        <sphereGeometry args={[1.65, 48, 48]} />

        <meshBasicMaterial
          color="#00dfff"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Inner energy */}
      <mesh>
        <sphereGeometry args={[1.05, 48, 48]} />

        <meshBasicMaterial
          color="#35e5ff"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Bright center */}
      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />

        <meshBasicMaterial
          color="#e9fdff"
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

function OrbitalSystem() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.x =
      Math.sin(t * 0.17) * 0.35;

    group.current.rotation.y =
      t * 0.12;

    group.current.rotation.z =
      Math.cos(t * 0.13) * 0.18;
  });

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry
          args={[3.2, 0.012, 16, 200]}
        />

        <meshBasicMaterial
          color="#62eaff"
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh rotation={[0.5, 0.3, 0]}>
        <torusGeometry
          args={[4.0, 0.008, 16, 200]}
        />

        <meshBasicMaterial
          color="#7d66ff"
          transparent
          opacity={0.2}
        />
      </mesh>

      <mesh rotation={[-0.7, 0.2, 0.7]}>
        <torusGeometry
          args={[4.7, 0.006, 16, 200]}
        />

        <meshBasicMaterial
          color="#49dcff"
          transparent
          opacity={0.13}
        />
      </mesh>

      <mesh rotation={[0.2, -0.8, 0.4]}>
        <torusGeometry
          args={[5.5, 0.004, 12, 200]}
        />

        <meshBasicMaterial
          color="#866bff"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

function WireframePlanet() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.x =
      state.clock.elapsedTime * 0.04;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.07;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2.8, 3]} />

        <meshBasicMaterial
          color="#54e5ff"
          wireframe
          transparent
          opacity={0.085}
        />
      </mesh>

      <mesh scale={0.73}>
        <icosahedronGeometry args={[2.8, 2]} />

        <meshBasicMaterial
          color="#9b7aff"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

function FloatingGeometry() {
  const objects = useRef([]);

  useFrame((state) => {
    objects.current.forEach((object, index) => {
      if (!object) return;

      object.rotation.x +=
        0.0015 + index * 0.0003;

      object.rotation.y +=
        0.002 + index * 0.0002;

      object.position.y +=
        Math.sin(
          state.clock.elapsedTime * 0.5 +
            index
        ) * 0.0008;
    });
  });

  const shapes = [
    [-5.3, 2.8, -2, 0.55],
    [5.2, 2.1, -3, 0.4],
    [-4.8, -2.5, -1, 0.35],
    [4.6, -2.8, -2, 0.5],
    [6, -0.2, -5, 0.28],
  ];

  return (
    <>
      {shapes.map(
        ([x, y, z, scale], index) => (
          <mesh
            key={index}
            ref={(el) =>
              (objects.current[index] = el)
            }
            position={[x, y, z]}
            scale={scale}
          >
            <octahedronGeometry args={[0.5, 0]} />

            <meshBasicMaterial
              color={
                index % 2 === 0
                  ? "#60e8ff"
                  : "#876aff"
              }
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        )
      )}
    </>
  );
}

function CameraMotion() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const targetX =
      state.pointer.x * 0.22;

    const targetY =
      state.pointer.y * 0.12;

    group.current.rotation.y +=
      (targetX -
        group.current.rotation.y) *
      0.012;

    group.current.rotation.x +=
      (-targetY -
        group.current.rotation.x) *
      0.012;
  });

  return (
    <group ref={group}>
      <Particles />
      <Nebula />
      <Core />
      <OrbitalSystem />
      <WireframePlanet />
      <FloatingGeometry />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="three-background">
      <Canvas
        camera={{
          position: [0, 0, 11],
          fov: 52,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <color
          attach="background"
          args={["#010305"]}
        />

        <fog
          attach="fog"
          args={[
            "#010305",
            8,
            25,
          ]}
        />

        <ambientLight intensity={0.3} />

        <CameraMotion />
      </Canvas>
    </div>
  );
}