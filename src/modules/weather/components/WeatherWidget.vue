<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-2">
    <section class="w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-100 flex flex-col items-center gap-6 relative">
      <form @submit.prevent="getWeather" class="flex w-full gap-2 mb-4 relative">
        <div class="flex-1 relative">
          <input
            v-model="query"
            type="text"
            placeholder="Escribe o selecciona una ciudad"
            class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white shadow-sm transition-all duration-200"
            autocomplete="off"
            :disabled="loading"
            @focus="showSuggestions = true"
            @keydown.down.prevent="moveSelection(1)"
            @keydown.up.prevent="moveSelection(-1)"
            @keydown.enter.prevent="selectHighlighted()"
            @blur="onBlur"
            @input="city.value = query"
          />
          <ul v-if="showSuggestions && suggestions.length" class="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded-xl mt-1 shadow-lg max-h-48 overflow-auto">
            <li v-for="(cityItem, idx) in suggestions" :key="cityItem.id"
                @mousedown.prevent="selectCity(cityItem)"
                :class="['px-4 py-2 cursor-pointer', idx === highlighted ? 'bg-blue-100' : 'hover:bg-blue-50']">
              {{ cityItem.name }}
            </li>
          </ul>
        </div>
        <button type="submit" class="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-95 transition-all duration-150 flex items-center justify-center min-w-[120px] shadow-md" :disabled="loading">
          <svg v-if="loading" class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span>Get Weather</span>
        </button>
      </form>
      <div v-if="weather" class="flex flex-col items-center w-full">
        <div class="mb-2">
          <span v-if="weatherFeelingIcon" class="text-6xl block mb-2">{{ weatherFeelingIcon }}</span>
        </div>
        <h2 class="text-2xl font-extrabold mb-1 text-gray-800 tracking-tight">{{ weather.city }}</h2>
        <p class="text-6xl font-black mb-1 text-blue-600 drop-shadow">{{ weather.temp }}<span class="text-3xl align-top">°C</span></p>
        <p class="text-lg text-gray-500 font-medium flex items-center gap-2">{{ weatherFeeling }}</p>
      </div>
      <div v-if="error" class="text-red-600 text-center mt-2 w-full">{{ error }}</div>
      <footer class="absolute bottom-2 right-4 text-xs text-gray-300 select-none">Weather Widget</footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useWeather } from '../composables/useWeather'
import { useCityAutocomplete } from '../composables/useCityAutocomplete'

const {
  city,
  weather,
  error,
  loading,
  weatherFeeling,
  getWeather
} = useWeather()


const {
  query,
  suggestions,
  searchCities
} = useCityAutocomplete()


// Combobox logic
const showSuggestions = ref(false)
const highlighted = ref(-1)

function moveSelection(dir: number) {
  if (!suggestions.value.length) return
  showSuggestions.value = true
  if (highlighted.value === -1 && dir > 0) highlighted.value = 0
  else highlighted.value = (highlighted.value + dir + suggestions.value.length) % suggestions.value.length
}

function selectHighlighted() {
  if (highlighted.value >= 0 && suggestions.value[highlighted.value]) {
    selectCity(suggestions.value[highlighted.value])
  }
}

function onBlur() {
  setTimeout(() => { showSuggestions.value = false; highlighted.value = -1 }, 100)
}

watch(query, (val) => {
  searchCities(val)
})

function selectCity(cityItem: any) {
  query.value = cityItem.name
  city.value = cityItem.name
  suggestions.value = []
  showSuggestions.value = false
  highlighted.value = -1
}

const weatherFeelingIcon = computed(() => {
  if (!weather.value) return ''
  const t = weather.value.temp
  if (t < 10) return '🧥'
  if (t <= 25) return '🌤'
  return '☀️'
})
</script>
