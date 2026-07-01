<template>
  <div class="map-page">
    <div ref="map" class="amap-demo">
      <div v-if="mapError" class="map-placeholder">{{ mapError }}</div>
    </div>

    <div class="toolbar">
      <span v-if="loaded">location: lng = {{ lng }} lat = {{ lat }}</span>
      <span v-else-if="!mapError">正在定位</span>
      <button @click="reqPost()">查询周边</button>
    </div>
  </div>
</template>

<script>
let amapLoader = null

function loadAmap (key) {
  if (window.AMap) {
    return Promise.resolve(window.AMap)
  }

  if (amapLoader) {
    return amapLoader
  }

  amapLoader = new Promise((resolve, reject) => {
    const callbackName = `__amapInit_${Date.now()}`
    const script = document.createElement('script')

    window[callbackName] = () => {
      delete window[callbackName]
      resolve(window.AMap)
    }

    script.onerror = () => {
      delete window[callbackName]
      reject(new Error('AMap script failed to load'))
    }
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(key)}&plugin=AMap.Geolocation&callback=${callbackName}`
    script.async = true
    document.head.appendChild(script)
  })

  return amapLoader
}

export default {
  data () {
    return {
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      mapError: '',
      map: null
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    async initMap () {
      const key = import.meta.env.VITE_AMAP_KEY
      if (!key) {
        this.mapError = '未配置 VITE_AMAP_KEY'
        return
      }

      try {
        const AMap = await loadAmap(key)
        this.map = new AMap.Map(this.$refs.map, {
          center: this.center,
          zoom: 12
        })

        AMap.plugin('AMap.Geolocation', () => {
          const geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,
            timeout: 10000,
            showButton: true,
            buttonPosition: 'RB',
            showMarker: true,
            showCircle: true,
            panToLocation: true,
            zoomToAccuracy: true
          })

          this.map.addControl(geolocation)
          geolocation.getCurrentPosition((status, result) => {
            if (status === 'complete' && result && result.position) {
              this.lng = result.position.lng
              this.lat = result.position.lat
              this.center = [this.lng, this.lat]
              this.loaded = true
            }
          })
        })
      } catch (error) {
        this.mapError = '地图加载失败'
        console.error(error)
      }
    },
    reqPost () {
      console.log('query nearby', this.center)
    }
  }
}
</script>

<style scoped>
.map-page {
  width: 80%;
}

.amap-demo {
  width: 60%;
  height: 40rem;
}

.map-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  border: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.7);
}

.toolbar {
  margin-top: 1rem;
}
</style>
