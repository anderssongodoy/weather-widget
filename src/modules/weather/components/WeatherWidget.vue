<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <section class="w-full max-w-md p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
      <form @submit.prevent="getWeather" class="flex gap-3 mb-8">
        <input
          v-model="city"
          type="text"
          placeholder="Enter city name"
          class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white"
          autocomplete="off"
          :disabled="loading"
        />
        <button type="submit" class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center min-w-[120px]" :disabled="loading">
          <svg v-if="loading" class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span>Get Weather</span>
        </button>
        
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
import { useWeather } from '../composables/useWeather'

const {
  city,
  weather,
  error,
  loading,
  weatherFeeling,
  getWeather
} = useWeather()
</script>
