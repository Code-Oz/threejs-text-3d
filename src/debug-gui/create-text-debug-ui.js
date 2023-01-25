import { createTextGeometry } from "../mesh/create-text-geometry";

const updateCurrentGeometry = (textMesh, options) => {
  textMesh.geometry = createTextGeometry(options);
};

export const createTextGUI = (gui, options, textMesh) => {
  gui
    .add(options, "size")
    .min(0.5)
    .max(15)
    .step(0.5)
    .onChange((value) => {
      options.size = value;
      updateCurrentGeometry(textMesh, options);
    });

  gui
    .add(options, "height")
    .min(0.1)
    .max(15)
    .step(0.1)
    .onChange((value) => {
      options.height = value;
      updateCurrentGeometry(textMesh, options);
    });

  gui
    .add(options, "curveSegments")
    .min(0)
    .max(40)
    .step(1)
    .onChange((value) => {
      options.curveSegments = value;
      updateCurrentGeometry(textMesh, options);
    });

  gui.add(options, "bevelEnabled").onChange((value) => {
    options.bevelEnabled = value;
    updateCurrentGeometry(textMesh, options);
  });

  gui
    .add(options, "bevelThickness")
    .min(0.01)
    .max(2)
    .step(0.01)
    .onChange((value) => {
      options.bevelThickness = value;
      updateCurrentGeometry(textMesh, options);
    });
  gui
    .add(options, "bevelOffset")
    .min(0.01)
    .max(2)
    .step(0.01)
    .onChange((value) => {
      options.bevelOffset = value;
      updateCurrentGeometry(textMesh, options);
    });
  gui
    .add(options, "bevelSegments")
    .min(0)
    .max(40)
    .step(1)
    .onChange((value) => {
      options.bevelSegments = value;
      updateCurrentGeometry(textMesh, options);
    });

  gui.add(textMesh.material, "wireframe");
};
