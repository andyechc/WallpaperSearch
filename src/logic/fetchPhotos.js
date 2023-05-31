export async function fetchPhotos(ENDPOINT) {
  try {
    const response = await fetch(ENDPOINT)
    if (response.status === 200) {
      const data = await response.json()
      const mappedPhotoList = data.results.map((photo) => (
        {
          id: photo.id,
          src: photo.urls.small,
          alt: photo.alt_description,
          download: photo.links.download
        }
      ))
      return { type: 'data', value: mappedPhotoList }
    } else {
      return { type: 'error', value: "Error Code: " + response.status }
    }
  }
  catch (error) {
    return { type: 'error', value: "Error al obtener las imágenes. Verifica La Conexión a Internet" }
  }
}
