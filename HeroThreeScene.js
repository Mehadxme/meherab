import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Animated geometric shape
const AnimatedShape = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* Main geometric shape */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color={hovered ? '#ffffff' : '#cccccc'}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Orbiting particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </group>
  );
};

// Particle component
const Particle = ({ index }) => {
  const ref = useRef();
  const angle = (index / 20) * Math.PI * 2;
  const radius = 3;

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.position.x = Math.cos(angle + time * 0.5) * radius;
      ref.current.position.z = Math.sin(angle + time * 0.5) * radius;
      ref.current.position.y = Math.sin(time * 2 + index) * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
};

// Scene component
const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />
      <Suspense fallback={null}>
        <AnimatedShape />
      </Suspense>
    </>
  );
};

// Main Hero component
const HeroThreeScene = () => {
  const [isLowPower, setIsLowPower] = useState(false);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-gray-50 dark:bg-black">
      {/* Three.js Canvas */}
      {!isLowPower ? (
        <div className="absolute inset-0">
          <Canvas
            dpr={[1, 2]}
            onCreated={({ gl }) => {
              gl.setClearColor('#000000', 0);
            }}
          >
            <Scene />
          </Canvas>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black" />
      )}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            Meherab Hossain
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 mb-8">
            Student & Explorer
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 max-w-md mx-auto">
            Touch & move to look around
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="px-8 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-sm font-medium backdrop-blur-xl bg-white/50 dark:bg-black/50 relative overflow-hidden group"
          >
            {/* Reflective shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/10 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Explore</span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Low power mode toggle */}
      <button
        onClick={() => setIsLowPower(!isLowPower)}
        className="absolute bottom-4 right-4 z-20 text-xs text-gray-500 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400"
      >
        {isLowPower ? 'Enable 3D' : 'Reduce motion'}
      </button>
    </section>
  );
};

export default HeroThreeScene;