import { type ShallowRef, reactive } from 'vue'
import { find } from 'lodash'
import { CustomGroup } from './CustomGroup'

export class CustomLayerGroup {
  layerSource: any[]

  layerGroup: any

  constructor() {
    this.layerSource = reactive<any[]>([])
    this.layerGroup = {}
  }

  setLayerVisible(key: string) {
    const source = find(this.layerSource, (item) => item.key === key)
    const group = this.layerGroup[key]
    group.setVisible(source.visible)
  }

  addLayerSource(map: ShallowRef<any>, key: string, layer: any) {
    const exist = this.layerSource.find((item) => item.key === key)
    if (exist) {
      this.layerGroup[key].addLayer(layer)
    } else {
      const group = new CustomGroup()
      group.initTo(map.value)
      group.addLayer(layer)
      this.layerGroup[key] = group
      this.layerSource.push({
        key,
        visible: true,
        toggle: (key: string) => {
          this.setLayerVisible(key)
        },
      })
    }
  }
}
