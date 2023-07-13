import * as THREE from 'three'
import { onMounted, ref, shallowRef } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export function useThree() {
  const container = ref<HTMLDivElement>()
  const scene = shallowRef<THREE.Scene>()
  const camera = shallowRef<THREE.PerspectiveCamera>()
  const renderer = shallowRef<THREE.WebGLRenderer>()
  const controls = shallowRef<OrbitControls>()

  const boostrapScene = () => {
    scene.value = new THREE.Scene()
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.value.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 1, 0) // 创建点光源，颜色为白色，强度为1，距离为0
    pointLight.position.set(0, 0, 0) // 将点光源放置在场景的原点
    scene.value.add(pointLight) // 将点光源添加到场景中
    const dirLight = new THREE.DirectionalLight(0xffffff, 3)
    dirLight.position.set(-3, 10, -10)
    dirLight.castShadow = true
    dirLight.shadow.camera.top = 2
    dirLight.shadow.camera.bottom = -2
    dirLight.shadow.camera.left = -2
    dirLight.shadow.camera.right = 2
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 40
    scene.value.add(dirLight)
  }

  const boostrapCamera = () => {
    const { offsetWidth, offsetHeight } = container.value as HTMLElement
    const configs = {
      fov: 75,
      aspect: offsetWidth / offsetHeight,
      near: 0.1,
      far: 9000,
      position: [0, 0, 5] as [number, number, number],
    }
    camera.value = new THREE.PerspectiveCamera(
      configs.fov,
      configs.aspect,
      configs.near,
      configs.far
    )
    camera.value.position.set(...configs.position)
  }

  const boostrapRenderer = () => {
    const { offsetWidth, offsetHeight } = container.value as HTMLElement
    const configs = {
      antialias: true,
      alpha: true,
      outputEncoding: THREE.sRGBEncoding,
      shadowMapEnabled: true,
      size: [offsetWidth, offsetHeight] as [number, number],
    }
    renderer.value = new THREE.WebGLRenderer({
      antialias: configs.antialias,
      alpha: configs.alpha,
    })
    renderer.value.outputEncoding = configs.outputEncoding
    renderer.value.shadowMap.enabled = configs.shadowMapEnabled
    renderer.value.setSize(...configs.size)
    renderer.value.localClippingEnabled = true
    container.value!.appendChild(renderer.value.domElement)
  }

  const boostrapControls = () => {
    const configs = {
      target: new THREE.Vector3(0, 0, 0),
    }
    controls.value = new OrbitControls(
      camera.value!,
      renderer.value!.domElement
    )
    controls.value.target = configs.target
    controls.value.update()
  }

  const loadGLTF = async (url: string) => {
    const loader = new GLTFLoader()
    const onCompleted = (object: GLTF, resolve: any) => resolve(object)
    return new Promise<GLTF>((resolve) => {
      loader.load(url, (object: GLTF) => onCompleted(object, resolve))
    })
  }

  const render = () => {
    controls.value!.update()
    renderer.value!.render(scene.value!, camera.value!)
    requestAnimationFrame(() => render())
  }

  onMounted(() => {
    boostrapScene()
    boostrapCamera()
    boostrapRenderer()
    boostrapControls()
    render()
  })

  return {
    container,
    scene,
    camera,
    renderer,
    controls,
    loadGLTF,
  }
}
