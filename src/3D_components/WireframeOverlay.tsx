import React from 'react';
import * as THREE from 'three';

type WireframeOverlayProps = {
  mesh: THREE.Mesh;
};

const WireframeOverlay = ({ mesh }: WireframeOverlayProps) => {
  const meshRef = React.useRef();

  const geo = new THREE.EdgesGeometry(mesh.geometry);
  const mat = new THREE.LineBasicMaterial({ color: 'black', linewidth: 1 });
  const wf = new THREE.LineSegments(geo, mat);

  mesh.add(wf);

  return <primitive object={mesh} ref={meshRef} position />;
};

export default WireframeOverlay;
