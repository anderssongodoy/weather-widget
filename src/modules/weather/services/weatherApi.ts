export async function fetchWeather(city: string) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  const baseUrl = import.meta.env.VITE_OPENWEATHER_BASE_URL || 'https://api.openweathermap.org/data/2.5/weather'
  const url = `${baseUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('City not found or API error')
  }
  const data = await res.json()
  return {
    city: data.name,
    temp: Math.round(data.main.temp)
  }
}
