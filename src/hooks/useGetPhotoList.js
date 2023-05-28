import {useState, useEffect} from 'react'

//you have to create this docs with the API_KEY and the ENDPOINT of the API
import {ENDPOINT_API_IMG_URL, API_KEY} from '../logic/service.js'
import {searchPhotos} from '../logic/searchPhotos.js'

export function useGetPhotoList({query}) {
    const [photoList, setPhotoList] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState()
  
    useEffect( () =>{
        if (query) {
          const COMPLETE_URL = ENDPOINT_API_IMG_URL(query)+API_KEY
          searchPhotos(COMPLETE_URL).then(({type, value}) =>{
            type === 'data' 
              ? setPhotoList(value)
              : setErr(value)
          setIsLoading(false)
          })
        }
      },[query])
    return ({photoList, err, setErr, isLoading, setIsLoading})
  }