import { createApp } from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'
import 'animate.css'

function bootstrap() {
  const app = createApp(App)
  app.mount('#app')
}

bootstrap()
