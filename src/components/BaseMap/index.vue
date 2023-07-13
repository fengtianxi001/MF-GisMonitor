<template>
  <div ref="container" class="base-map">
    <div class="controls">
      <LayerContorl :layerSource="layerSource" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { sampleSize } from 'lodash'
import * as turf from '@turf/turf'
import { useBaseMap } from './hooks/useBaseMap'
import LayerContorl from './widgets/LayerContorl.vue'
import { fetchSource } from './utils'
import { GeoJSONSources } from './configs'
import Marker from './widgets/Marker.vue'

const {
  container,
  layerSource,
  addGeoJSON,
  setInverseRegion,
  addLayerMarkers,
} = useBaseMap()

onMounted(() => {
  fetchSource(GeoJSONSources.boundary).then((geojson) => {
    setInverseRegion(geojson)
  })

  fetchSource(GeoJSONSources.river).then((geojson) => {
    addGeoJSON(geojson, '水系水路', {
      weight: 0.5,
      color: '#26ca89',
      fillOpacity: 0,
      opacity: 0.7,
    })
  })

  fetchSource(GeoJSONSources.waters).then((geojson) => {
    addGeoJSON(geojson, '水域', {
      weight: 0.5,
      fillColor: '#28ccf6',
      fillOpacity: 0.8,
      opacity: 0,
    })
  })
  fetchSource(GeoJSONSources.buildings).then((geojson) => {
    const features = geojson.features.filter(
      (feature: any) => feature.properties.name
    )
    const result = sampleSize(features, 20).map((feature: any) => {
      const [lng, lat] = turf.center(feature).geometry.coordinates
      const { name } = feature.properties
      return {
        name,
        coordinate: [lat, lng],
        props: { name },
        component: Marker,
      }
    })
    addLayerMarkers(result)
  })
})
</script>
<style lang="scss" scoped>
.base-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;

  .controls {
    position: absolute;
    top: 80px;
    left: 400px;
    z-index: 9999;
  }
}
</style>
