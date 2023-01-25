import * as THREE from "three";
export const createMaterialWithMatcap = (matcapTexture) => {
  const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
  // Need to set wireframe property to update it with GUI
  material.wireframe = false;
  return material;
};
