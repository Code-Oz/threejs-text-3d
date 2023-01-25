import * as THREE from "three";
import { textContent } from "../config";

export const createTextGeometry = (options) => {
  const geometry = new THREE.TextBufferGeometry(textContent, options);
  geometry.center();
  return geometry;
};
