

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <section class="w-full max-w-md p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
      <form @submit.prevent="onFetchWeather" class="flex gap-3 mb-8">
        <input
          v-model="city"
          type="text"
          placeholder="Enter city name"
          class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white"
          autocomplete="off"
        />
        <button type="submit" class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Get Weather</button>
      </form>
      <div v-if="weather" class="text-center">
        <h2 class="text-2xl font-bold mb-2 text-gray-800">{{ weather.city }}</h2>
        <p class="text-5xl font-extrabold mb-2 text-blue-600">{{ weather.temp }}°C</p>
        <p class="text-lg text-gray-500">{{ weatherFeeling }}</p>
      </div>
      <div v-if="error" class="text-red-600 text-center mt-4">{{ error }}</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// State
const city = ref('')
const weather = ref<{ city: string; temp: number } | null>(null)
const error = ref<string | null>(null)

// Computed for weather feeling
const weatherFeeling = computed(() => {
  if (!weather.value) return ''
  const t = weather.value.temp
  if (t < 10) return "It's cold 🧥"
  if (t <= 25) return 'Mild weather 🌤'
  return "It's hot ☀️"
})

// Placeholder for fetch logic
function onFetchWeather() {
  // To be implemented: fetch weather from API
  error.value = null
  weather.value = null
}
</script>


