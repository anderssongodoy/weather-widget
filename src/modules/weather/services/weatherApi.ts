export async function fetchWeather(city: string) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  const baseUrl = import.meta.env.VITE_OPENWEATHER_BASE_URL
  const url = `${baseUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('OpenWeatherMap error')
    const data = await res.json()
    return {
      city: data.name,
      temp: Math.round(data.main.temp)
    }
  } catch (e) {
    // Fallback a WeatherAPI
    const apiKey2 = import.meta.env.VITE_WEATHERAPI_KEY
    const baseUrl2 = import.meta.env.VITE_WEATHERAPI_BASE_URL
    const url2 = `${baseUrl2}?key=${apiKey2}&q=${encodeURIComponent(city)}&aqi=no`
    const res2 = await fetch(url2)
    if (!res2.ok) throw new Error('No se pudo obtener el clima de ninguna API')
    const data2 = await res2.json()
    return {
      city: data2.location.name,
      temp: Math.round(data2.current.temp_c)
    }
  }
}
