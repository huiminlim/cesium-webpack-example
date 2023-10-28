import {
  Viewer,
  buildModuleUrl,
  ImageryLayer,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
  CesiumTerrainProvider,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css";

const viewer = new Viewer("cesiumContainer", {
  baseLayerPicker: false,
  baseLayer: ImageryLayer.fromProviderAsync(
    TileMapServiceImageryProvider.fromUrl(
      buildModuleUrl("Assets/Textures/NaturalEarthII")
    )
  ),
  // imageryProvider: new UrlTemplateImageryProvider({
  //   url: "http://localhost:8080/maps/{z}/{x}/{y}.png",
  // }),
});

// var terrainProvider = new CesiumTerrainProvider({
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
