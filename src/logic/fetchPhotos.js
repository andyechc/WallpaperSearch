export async function fetchPhotos(COMPLETE_URL) {
  try {
    const response = await fetch(COMPLETE_URL)
    if (response.status === 200) {
      const data = await response.json()
      return { type: 'data', value: data.results }
    } else {
      return { type: 'error', value: "Error Code: " + response.status }
    }
  }
  catch (error) {
    return { type: 'error', value: "Error al obtener las imágenes. Verifica La Conexión a Internet" }
  }
}
