import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './component/Model';
import { Environment, OrbitControls } from '@react-three/drei';
import { GUI } from 'dat.gui';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function App() {
  const [wireframe, setWireframe] = useState(false);
  const [bloomIntensity, setBloomIntensity] = useState(1.5);
  const [autoRotate, setAutoRotate] = useState(true);
  const guiRef = useRef(null);
  useEffect(() => {
    if (!guiRef.current) {
      // Initialize GUI only once
      const gui = new GUI();
      guiRef.current = gui;

      // Adjust GUI panel position
      gui.domElement.style.position = 'absolute';
      gui.domElement.style.top = '50px';
      gui.domElement.style.right = '20px';

      const wireframeFolder = gui.addFolder('Wireframe');
      wireframeFolder.add({ wireframe }, 'wireframe').name('Enable Wireframe').onChange(value => setWireframe(value));

      const bloomFolder = gui.addFolder('Bloom');
      bloomFolder.add({ bloomIntensity }, 'bloomIntensity', 0, 5).name('Bloom Intensity').onChange(value => setBloomIntensity(value));

      const orbitControlsFolder = gui.addFolder('OrbitControls');
      orbitControlsFolder.add({ autoRotate }, 'autoRotate').name('Auto Rotate').onChange(value => setAutoRotate(value));
    }
    return () => {
      if (guiRef.current) {
        guiRef.current.destroy();
        guiRef.current = null;
      }
    };
  }, [wireframe, bloomIntensity, autoRotate]);
  return (
    <>
      <Canvas dpr={Math.min(window.devicePixelRatio, 2)}
        style={{ width: window.innerWidth, height: window.innerHeight }}
        shadows
        camera={{ position: [1, 1, 12], fov: 40 }}>
        <Environment preset="dawn" environmentIntensity={1} />
        <ambientLight color={"white"} intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enablePan={true} autoRotate={autoRotate} autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.1} />
        <color attach="background" args={["black"]} />
        <Model wireframe={wireframe} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={bloomIntensity} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
