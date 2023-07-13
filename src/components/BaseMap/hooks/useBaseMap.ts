import { onMounted, ref, shallowRef } from 'vue'
import * as L from 'leaflet'
import * as turf from '@turf/turf'
import { instantiateComponent } from '../utils'
import { MapConfigs, TileConfigs } from '../configs'
import { CustomLayerGroup } from '../core/CustomLayerGroup'

export function useBaseMap() {
  const container = ref<HTMLElement>()
  const map = shallowRef<L.Map>()
  const tile = shallowRef<L.TileLayer>()
  const customLayerGroup = new CustomLayerGroup()
  const bootstrap = () => {
    map.value = L.map(container.value!, MapConfigs)
    tile.value = L.tileLayer(TileConfigs.source)
    tile.value.addTo(map.value)
  }

  const setInverseRegion = (geojson: any) => {
    const boundary = [
      [73, 59],
      [136, 59],
      [136, 3],
      [73, 3],
      [73, 59],
    ]
    const difference: any = turf.difference(
      turf.polygon([boundary]),
      geojson.features[0].geometry
    )
    const defaultStyle = {
      fillOpacity: 0,
    }
    const inverseRegion = L.geoJSON(difference, {
      style: {
        fillColor: '#000000',
        fillOpacity: 0.5,
        opacity: 0,
      },
    })
    const positiveRegion = L.geoJSON(geojson.features[0].geometry, {
      style: Object.assign(defaultStyle, {
        weight: 2,
        color: '#25ca89',
        opacity: 1,
      }),
    })
    map.value!.addLayer(inverseRegion)?.addLayer(positiveRegion)
  }

  const addGeoJSON = (geojson: any, name: string, style?: any) => {
    const layer = L.geoJSON(geojson)
    layer.setStyle({ weight: 1, color: '#1dfefe', ...style })
    customLayerGroup.addLayerSource(map, name, layer)
  }

  const addLayerMarker = (config: any) => {
    const { component, props, name, coordinate } = config
    const html = instantiateComponent(component, props)
    // if (html.nodeName === '#text') {
    //   html = html.nextElementSibling as HTMLElement
    // }
    const icon = L.divIcon({
      html,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    })
    const marker = L.marker(L.latLng(coordinate), { icon })
    customLayerGroup.addLayerSource(map, name, marker)
  }

  const addLayerMarkers = (configs: any[]) => {
    configs.forEach((config) => {
      addLayerMarker(config)
    })
  }

  onMounted(() => {
    bootstrap()
  })

  return {
    container,
    layerSource: customLayerGroup.layerSource,
    addGeoJSON,
    addLayerMarker,
    addLayerMarkers,
    setInverseRegion,
  }
}
