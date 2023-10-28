import { Ion, Viewer, Cartesian3, Math } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {});

// // Add Cesium OSM Buildings, a global 3D buildings layer.
// viewer.scene.primitives.add(createOsmBuildings());

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Math.toRadians(0.0),
    pitch: Math.toRadians(-15.0),
  },
});
