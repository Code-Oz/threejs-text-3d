import * as THREE from "three";

export const createCamera = (sizes) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.01,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  camera.focalLength = 3;

  return camera;
};

export const updateCameraWhenResizeEvent = (camera, sizes) => {
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
};
