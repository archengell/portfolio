import { Avatar } from './Avatar.tsx';
import WireframeOverlay from './WireframeOverlay.tsx';
import * as THREE from 'three';
import { Colors } from '@lib/constants/colors.ts';

const boxGeo = new THREE.BoxGeometry(0.5, 0.4, 0.5);
const boxMatl = new THREE.MeshBasicMaterial({
  color: new THREE.Color(Colors.Blue8),
  opacity: 0.5,
  transparent: true,
});

const boxMesh = new THREE.Mesh(boxGeo, boxMatl);

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
      <group position={[0, 0.5, 1]}>
        <Avatar animation="Typing" />
      </group>
      <group position={[-1, -0.25, 0]}>
        <WireframeOverlay mesh={boxMesh} />
      </group>
      <ambientLight intensity={0.5} />
      <group position={[-1, -0.5, 0]}>
        <WireframeOverlay mesh={planeMesh} />
      </group>
    </>
  );
};
