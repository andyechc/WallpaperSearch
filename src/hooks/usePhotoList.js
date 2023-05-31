import { useState, useEffect } from 'react'
//you have to create a file with the API_KEY and the ENDPOINT of the API that receives the query 
import { ENDPOINT_API_IMG_URL } from '../logic/service.js'
import { fetchPhotos } from '../logic/fetchPhotos.js'

export function usePhotoList({ query }) {
  const [photoList, setPhotoList] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState()

  useEffect(() => {
    if (query) {
      fetchPhotos(ENDPOINT_API_IMG_URL(query))
        .then(({ type, value }) => {
        //this validation is performed with objects to check if the fetch returned the response correctly or an error
        if (type === 'data') {
          value.length == 0
            ? (setErr('No se encontraron resultados'), setPhotoList(null))
            : setPhotoList(value)
        } else setErr(value)

        setIsLoading(false)
      })
    }
  }, [query])

  return ({ photoList, err, setErr, isLoading, setIsLoading })
}