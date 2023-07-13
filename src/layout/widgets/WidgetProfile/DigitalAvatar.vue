<template>
  <div ref="container" class="digital-avatar"></div>
</template>
<script setup lang="ts">
import { useThree } from '@/hooks/useThree'
import { onMounted } from 'vue'
import * as THREE from 'three'

const { container, scene, controls, loadGLTF } = useThree()

onMounted(() => {
  loadGLTF('/models/face.glb').then((res) => {
    controls.value!.autoRotate = true
    controls.value!.autoRotateSpeed = 4.0
    const material = new THREE.MeshBasicMaterial({
      color: '#1dfffe',
      wireframe: true,
      wireframeLinewidth: 100,
    })
    const faceModel = res.scene
    faceModel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material
      }
    })
    faceModel.position.set(0.1, -1, 0)
    const scale = 10
    faceModel.scale.set(scale, scale, scale)
    scene.value!.add(faceModel)
  })
})
</script>
<style lang="scss" scoped>
.digital-avatar {
  grid-row: 1 / span 2;
  grid-column: 2;
  width: 140px;
  height: 90px;
  border: 1px solid #33353b;
}
</style>
