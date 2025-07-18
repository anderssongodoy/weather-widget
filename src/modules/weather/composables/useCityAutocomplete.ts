import { ref } from 'vue'
import { fetchCities } from '../services/geoDbApi'

const BASE_COUNTRY = 'PE' // Puedes cambiarlo o hacerlo dinámico si lo deseas

export function useCityAutocomplete() {
  const query = ref('')
  const suggestions = ref<any[]>([])
  const loading = ref(false)
  const error = ref('')

  async function searchCities(q: string) {
    if (!q || q.length < 2) {
      suggestions.value = []
      return
    }
    loading.value = true
    error.value = ''
    try {
      // Buscar ciudades globalmente usando namePrefix
      const all = await fetchCities({ namePrefix: q, limit: 10 })
      suggestions.value = all
    } catch (e: any) {
      error.value = 'Error buscando ciudades'
      suggestions.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    query,
    suggestions,
    loading,
    error,
    searchCities,
  }
}
