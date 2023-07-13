import * as L from 'leaflet'

export const CustomGroup = L.LayerGroup.extend({
  parent: null,
  initTo(map: L.Map) {
    this.parent = map
    map.addLayer(this)
    return this
  },
  setVisible(visible: boolean) {
    this.eachLayer((layer: any) => {
      if (!this.parent) return false
      if (visible) return layer.addTo(this.parent)
      return layer.removeFrom(this.parent)
    })
    return this
  },
})

export default CustomGroup
