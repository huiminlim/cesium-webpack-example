import {
  Viewer,
  buildModuleUrl,
  ImageryLayer,
  TileMapServiceImageryProvider,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css";

var imageryViewModels = [];

// // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
// const viewer = new Viewer("cesiumContainer", {
//   // Hide the base layer picker
//   baseLayerPicker: false,
//   // baseLayer: new createTileMapServiceImageryProvider({
//   //   url: buildModuleUrl("/Assets/Textures/NaturalEarthII"),
//   // }),
// });

const viewer = new Viewer("cesiumContainer", {
  baseLayerPicker: false,
  baseLayer: ImageryLayer.fromProviderAsync(
    TileMapServiceImageryProvider.fromUrl(
      buildModuleUrl("Assets/Textures/NaturalEarthII")
    )
  ),
});

// var terrainProvider = new Cesium.CesiumTerrainProvider({
//   url: "http://localhost:8080/terrain",
// });

// viewer.scene.terrainProvider = terrainProvider;
// viewer.scene.globe.terrainExaggeration = 1.0;

// Add Cesium OSM Buildings, a global 3D buildings layer.
// var tileset = viewer.scene.primitives.add(
//   new Cesium.Cesium3DTileset({
//     url: "http://localhost:3000/optimized-tiles/tileset.json",
//   })
// );
// tileset.cacheBytes = 536870912 * 5;
// tileset.debugColorizeTiles = true;
// tileset.loadSiblings = true;

// // Fly the camera to San Francisco at the given longitude, latitude, and height.
// viewer.camera.flyTo({
//   destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
//   orientation: {
//     heading: Math.toRadians(0.0),
//     pitch: Math.toRadians(-15.0),
//   },
// });
