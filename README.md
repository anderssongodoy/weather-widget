# Weather Widget

## Descripción
Widget de clima modular y escalable en Vue 3 (Composition API + Vite + Tailwind). Permite consultar el clima actual de cualquier ciudad usando una API pública.

## Instalación y uso

1. Instala las dependencias:
   ```
   npm install
   ```
2. Crea un archivo `.env` en la raíz con:
   ```
   VITE_OPENWEATHER_API_KEY=tu_api_key_openweather
   VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/weather
   VITE_WEATHERAPI_KEY=tu_api_key_weatherapi
   VITE_WEATHERAPI_BASE_URL=https://api.weatherapi.com/v1/current.json
   VITE_GEODB_API_KEY=tu_api_key_geodb
   ```
3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
4. Accede a `http://localhost:5173/weather` para ver el widget.

## Estructura del proyecto

- `src/modules/weather/components/WeatherWidget.vue` — Componente de UI
- `src/modules/weather/composables/useWeather.ts` — Lógica y estado del clima
- `src/modules/weather/services/weatherApi.ts` — Llamadas a APIs de clima
- `.env` — Variables de entorno (API keys y URLs)

## Notas
- Toda la lógica y llamadas a APIs están modularizadas para facilitar el mantenimiento y la escalabilidad.
- El diseño es limpio y responsivo gracias a Tailwind CSS.
- Para el autocompletado de ciudades se utiliza la API pública GeoDB Cities (`/places?namePrefix=`), permitiendo buscar y seleccionar cualquier ciudad del mundo de forma rápida y flexible.
- El input de ciudad funciona como un combobox: puedes escribir cualquier ciudad (aunque no esté en la lista de sugerencias) o seleccionar una sugerencia global.
