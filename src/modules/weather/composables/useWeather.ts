import { ref, computed } from 'vue'
import { fetchWeather } from '../services/weatherApi'

export function useWeather() {
  const city = ref('')
  const weather = ref<{ city: string; temp: number } | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const weatherFeeling = computed(() => {
    if (!weather.value) return ''
    const t = weather.value.temp
    if (t < 10) return "It's cold 🧥"
    if (t <= 25) return 'Mild weather 🌤'
    return "It's hot ☀️"
  })

  async function getWeather() {
    error.value = null
    weather.value = null
    if (!city.value.trim()) {
      error.value = 'Please enter a city name.'
      return
    }
    loading.value = true
    try {
      weather.value = await fetchWeather(city.value)
    } catch (e: any) {
      error.value = e.message || 'Error fetching weather data.'
    } finally {
      loading.value = false
    }
  }

  return {
    city,
    weather,
    error,
    loading,
    weatherFeeling,
    getWeather
  }
}
