/*
Auto-generated by: https://github.com/pmndrs/gltfjsx && https://gltf.pmnd.rs/
Coffee cup by Poly by Google [CC-BY] via Poly Pizza
*/

import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

// @ts-ignore
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const CoffeeCup = (props: any) => {
  const { nodes, materials } = useGLTF('models/Coffee cup.glb');
  const coffeeRef = React.useRef<THREE.Mesh>(null);
  return (
    <group ref={coffeeRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube022.geometry}
        material={materials['Material.005']}
      />
    </group>
  );
};

useGLTF.preload('models/Coffee cup.glb');
