export const MapConfigs: any = {
  center: [40.250347, 116.46249449999999],
  zoom: 9,
  minZoom: 9,
  maxZoom: 18,
  zoomControl: false,
  attributionControl: false,
}

export const TileConfigs = {
  source: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
}

export const GeoJSONSources = {
  boundary: '/data/北京市边界.geojson',
  buildings: '/data/北京市建筑轮廓.geojson',
  river: '/data/北京市水系水路.geojson',
  railway: '/data/北京市铁路轨道.geojson',
  waters: '/data/北京市水域.geojson',
}
