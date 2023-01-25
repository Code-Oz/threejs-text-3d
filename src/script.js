import "./style.css";
import * as THREE from "three";
import { sizes, basicValue } from "./config";
import { createGUI } from "./debug-gui/create-gui";
import { createCamera, updateCameraWhenResizeEvent } from "./camera/camera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createTextGUI } from "./debug-gui/create-text-debug-ui";
import { createTextGeometry } from "./mesh/create-text-geometry";
import { createMaterialWithMatcap } from "./mesh/create-material";
/**
 * Canvas
 */
const canvas = document.querySelector("canvas.webgl");

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("textures/matcaps/8.png");

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Fonts
 */
const fontLoader = new THREE.FontLoader();
fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
  // Material
  const material = createMaterialWithMatcap(matcapTexture);

  const options = {
    font: font,
    ...basicValue,
  };

  // Text
  const textGeometry = createTextGeometry(options);

  const text = new THREE.Mesh(textGeometry, material);
  scene.add(text);

  /**
   * GUI
   */
  createGUI(scene, options, text);
});

/**
 * Camera
 */
const camera = createCamera(sizes);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  updateCameraWhenResizeEvent(camera, sizes);

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});

const tick = () => {
  // Render
  renderer.render(scene, camera);

  // Update controls
  controls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
tick();
