import { useState } from 'react'
import { useGetPhotoList } from '../../hooks/useGetPhotoList.js'
//CSS
import './InputSearch.css'
//Components
import { Response } from '../Response/Response.jsx'

export function InputSearch() {
  //this state is the query that recive the API to search the photolist
  const [query, setQuery] = useState()
  // This custom hooks has the function of fetching the api and returning the error and the list of images
  const { photoList, err, setErr, isLoading, setIsLoading } = useGetPhotoList({ query })

  const handleSumit = event => {
    event.preventDefault()
    //setting the error to null to clear the image loading screen in case you already found an error before
    err && setErr()
    const keywords = document.getElementById('input').value
    //the user's fetch is stored in a var and given to the state to handle the fetch
    setQuery(keywords)
    setIsLoading(true)
  }

  return (
    <>
      <form onSubmit={handleSumit} className="ws-form">
        <input id="input" className="ws-form-input" placeholder="Explora el Universo..." type="search" />
        <button className="ws-form-button">⚲</button>
      </form>

      <Response error={err} isLoading={isLoading} photoList={photoList} />
    </>
  )
} 