import {
  Viewer,
  buildModuleUrl,
  ImageryLayer,
  TileMapServiceImageryProvider,
  ProviderViewModel,
  UrlTemplateImageryProvider,
  CesiumTerrainProvider,
  Cesium3DTileset,
  Cartesian3,
  Math,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css";

var imageryProviders = [];

imageryProviders.push(
  new ProviderViewModel({
    name: "Singapore Google Maps",
    iconUrl: "",
    tooltip: "Singapore Google Maps",
    category: "Offline",
    creationFunction: function () {
      return new UrlTemplateImageryProvider({
        url: "http://localhost:8080/maps/{z}/{x}/{y}.png",
        maximumLevel: 16,
      });
    },
  })
);

const viewer = new Viewer("cesiumContainer", {
  baseLayerPicker: true,
  baseLayer: ImageryLayer.fromProviderAsync(
    TileMapServiceImageryProvider.fromUrl(
      buildModuleUrl("Assets/Textures/NaturalEarthII")
    )
  ),
  imageryProviderViewModels: imageryProviders,
});

var terrainProvider = await CesiumTerrainProvider.fromUrl(
  "http://localhost:8080/terrain"
);
viewer.scene.terrainProvider = terrainProvider;
viewer.scene.globe.terrainExaggeration = 1.0;

// Add Cesium OSM Buildings, a global 3D buildings layer.
var tileset = new Cesium3DTileset({
  url: "http://localhost:8080/optimized-tiles/tileset.json",
});
viewer.scene.primitives.add(tileset);
tileset.cacheBytes = 536870912 * 5;
tileset.debugColorizeTiles = true;
tileset.loadSiblings = true;

// viewer.camera.flyTo({
//   destination: Cartesian3.fromDegrees(103.8021, 1.3294, 400),
//   orientation: {
//     heading: Math.toRadians(0.0),
//     pitch: Math.toRadians(-15.0),
//   },
// });
