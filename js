require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "d9b7216aa5184d048b3b33e82c927da3"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
