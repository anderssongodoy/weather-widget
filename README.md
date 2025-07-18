# Weather Widget

## Description
A scalable, modular Vue 3 (Composition API + Vite + Tailwind) weather widget. Enter a city and get the current temperature and weather feeling using OpenWeatherMap.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file in the root with:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/weather
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
4. Visit `http://localhost:5173/weather`

## Project Structure

- `src/modules/weather/components/WeatherWidget.vue` — UI component
- `src/modules/weather/composables/useWeather.ts` — Weather logic (state, actions)
- `src/modules/weather/services/weatherApi.ts` — API calls
- `.env` — Environment variables (API key, base URL)
- `decisiones.md` — Architectural decisions (not tracked in git)

## Notes
- All business logic and API calls are modularized for scalability and maintainability.
- See `decisiones.md` for architectural reasoning and decisions.
