export const API_KEY = import.meta.env.VITE_API_KEY
export function ENDPOINT_API_IMG_URL(query) {
  return (`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`)
}
