import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
export function Model(props) {
  const { nodes, materials } = useGLTF('shine.glb')
  Object.keys(materials).forEach(key => {
    materials[key].wireframe = props.wireframe;
  });
  return (
    <group {...props} position={[0,-2,0]} rotation={[0,-0.9,0]} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Metal} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Metal} position={[1.333, 0.157, -1.326]} scale={[-0.079, -0.051, -0.051]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Metal} position={[1.333, 0.157, 1.333]} scale={[-0.079, -0.051, -0.051]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Metal} position={[-1.313, 0.157, 1.333]} scale={[-0.079, -0.051, -0.051]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Metal} position={[-1.279, 0.157, -1.345]} scale={[-0.079, -0.051, -0.051]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.003']} position={[0.038, 2.161, 0.073]} scale={[1.405, 1.864, 2.145]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.003']} position={[1.508, 0.416, -1.201]} rotation={[0, 1.269, 0]} scale={[0.119, 1.321, 1.152]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.Metal} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.003']} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.003']} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials.Metal} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.003']} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.003']} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.001']} position={[0.038, 2.118, 0.073]} scale={[1.405, 1.922, 1.637]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials.Metal} position={[0, 2.124, 0]} scale={[1.52, 1.922, 1.52]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} scale={12.551} />
      {/* <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[-12.504, -0.001, -0.006]} rotation={[0, 0, -Math.PI / 2]} scale={15.145} /> */}
    </group>
  )
}

useGLTF.preload('shine.glb')
