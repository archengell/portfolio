import React from 'react';
import { Avatar } from './Avatar.tsx';
// import WireframeOverlay from './WireframeOverlay.tsx';
import * as THREE from 'three';
// import { Colors } from '@lib/constants/colors.ts';
import { Chair } from './Chair.tsx';
import { Desk } from './Desk.tsx';
import { Rug } from './Rug.tsx';
import { Laptop } from './Laptop.tsx';
import { Mouse } from './Mouse.tsx';
import { Plant } from './HousePlant.tsx';
import { OfficeTools } from './OfficeTools.tsx';
import { CoffeeCup } from './CoffeeCup.tsx';
import { Bike } from './Bike.tsx';

// const boxGeo = new THREE.BoxGeometry(0.5, 0.4, 0.5);
// const boxMatl = new THREE.MeshBasicMaterial({
//   color: new THREE.Color(Colors.Blue8),
//   opacity: 0.5,
//   transparent: true,
// });

// const boxMesh = new THREE.Mesh(boxGeo, boxMatl);

const planeGeo = new THREE.PlaneGeometry();
const planeMatl = new THREE.MeshStandardMaterial({
  color: new THREE.Color('white'),
  opacity: 0.75,
  transparent: true,
});

const planeMesh = new THREE.Mesh(planeGeo, planeMatl);
planeMesh.scale.set(3, 3, 3);
planeMesh.rotation.set(-Math.PI * 0.5, 0, 0);
planeMesh.position.set(0, 0, -10);

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <group position={[0, 0.5, 1]}>
        <Avatar animation="Typing" />
      </group>
      {/* <group position={[-1, -0.25, 0]}>
        <WireframeOverlay mesh={boxMesh} />
      </group> */}
      <group position={[-8.4, 0.5, 6.3]} scale={0.025}>
        <Chair />
      </group>
      <group position={[0, 0.5, 1.8]} scale={0.75} rotation={[0, THREE.MathUtils.degToRad(90), 0]}>
        <Desk />
      </group>
      {/* <group position={[-1, -0.5, 0]}>
        <WireframeOverlay mesh={planeMesh} />
      </group> */}
      <group position={[0, 0.5, 1.5]} scale={0.5} rotation={[0, THREE.MathUtils.degToRad(90), 0]}>
        <Rug />
      </group>
      <group
        position={[0.1, 1.25, 1.7]}
        scale={0.2}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
      >
        <Laptop />
      </group>
      <group position={[-0.3, 1.2, 1.7]} scale={0.03}>
        <Mouse />
      </group>
      <group position={[-1, 0.5, 1.7]} scale={0.006}>
        <Plant />
      </group>
      <group position={[0.5, 1.3, 1.6]} scale={0.15}>
        <CoffeeCup />
      </group>
      <group position={[-0.5, 1.2, 1.5]} scale={100}>
        <OfficeTools />
      </group>
      <group
        position={[1.3, 0.5, 0.75]}
        scale={0.1}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
      >
        <Bike />
      </group>
    </>
  );
};
