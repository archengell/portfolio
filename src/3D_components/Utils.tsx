import * as THREE from 'three';

export const getGroupCenter = (group: THREE.Group) => {
  const center = new THREE.Vector3();

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const childWorldPosition = new THREE.Vector3();
      child.getWorldPosition(childWorldPosition);
      center.add(childWorldPosition);
    }
  });

  center.divideScalar(group.children.length);
  return center;
};

// eslint-disable-next-line
export const rotateAroundGroupCenter = (group: any, axis: THREE.Vector3, angle: number) => {
  const center = getGroupCenter(group);
  console.log('geoCenter', center);

  // subtract center vector from group position
  group.position.sub(center);
  // set rotate around axis in world space
  group.rotateOnWorldAxis(axis, angle);

  group.position.add(center);
};

// eslint-disable-next-line
export const createGroupObject = (nodes: any, materials: any): THREE.Group => {
  const group = new THREE.Group();
  group.scale.set(2, 2, 2);

  const skinnedMeshObjects = [
    { nodeName: 'EyeLeft', material: 'Wolf3D_Eye' },
    { nodeName: 'EyeRight', material: 'Wolf3D_Eye' },
    { nodeName: 'Wolf3D_Head', material: 'Wolf3D_Skin' },
    { nodeName: 'Wolf3D_Teeth', material: 'Wolf3D_Skin' },
    { nodeName: 'Wolf3D_Body', material: 'Wolf3D_Body' },
    { nodeName: 'Wolf3D_Outfit_Bottom', material: 'Wolf3D_Outfit_Bottom' },
    { nodeName: 'Wolf3D_Outfit_Top', material: 'Wolf3D_Outfit_Top' },
  ];

  skinnedMeshObjects.forEach(({ nodeName, material }) => {
    const skinnedMesh = new THREE.SkinnedMesh(nodes[nodeName].geometry, materials[material]);
    skinnedMesh.name = nodeName;
    skinnedMesh.skeleton = nodes[nodeName].skeleton;
    skinnedMesh.morphTargetDictionary = nodes[nodeName].morphTargetDictionary;
    skinnedMesh.morphTargetInfluences = nodes[nodeName].morphTargetInfluences;
    group.add(skinnedMesh);
  });

  return group;
};

type TCreateComponentFromGeo<T> = {
  geometry: T;
};

export const createComponentFromGeo = <T extends object>({
  geometry,
}: TCreateComponentFromGeo<T>): JSX.Element => {
  return <primitive object={geometry} />;
};
