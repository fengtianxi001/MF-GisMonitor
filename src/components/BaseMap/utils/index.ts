import { createVNode, defineComponent, h, render } from 'vue'

export function fetchSource(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export const instantiateComponent = (component: any, props: any) => {
  const newComponent = defineComponent({
    render() {
      return h(component, props)
    },
  })
  const instance = createVNode(newComponent)
  render(instance, document.createElement('div'))
  return instance.el as HTMLElement
}
