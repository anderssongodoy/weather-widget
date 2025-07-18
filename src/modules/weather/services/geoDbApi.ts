// Servicio para consumir la API de GeoDB Cities


const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
const API_KEY = import.meta.env.VITE_GEODB_API_KEY

// Busca ciudades globalmente por nombre (opcional) y soporta paginación
export async function fetchCities({ namePrefix = '', limit = 10, offset = 0 } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    types: 'CITY',
    sort: '-population',
  })
  if (namePrefix) params.append('namePrefix', namePrefix)
  const url = `${BASE_URL}/places?${params.toString()}`
  const res = await fetch(url, {
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    },
  })
  const data = await res.json()
  return data.data // [{id, name, ...}]
}
