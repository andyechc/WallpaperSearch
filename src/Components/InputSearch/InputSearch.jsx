import { useState } from 'react'
import { usePhotoList } from '../../hooks/usePhotoList.js'
//CSS
import './InputSearch.css'
//Components
import { Response } from '../Response/Response.jsx'

export function InputSearch() {
  //this state is the query that recive the API to search the photolist
  const [query, setQuery] = useState()
  // This custom hooks has the function of fetching the api and returning the error and the list of images
  const { mappedPhotoList, err, setErr, isLoading, setIsLoading } = usePhotoList({ query })

  const handleSumit = event => {
    event.preventDefault()
    //setting the error to null to clear the image loading screen in case you already found an error before
    err && setErr()
    const { userQuery } = Object.fromEntries(new window.FormData(event.target))
    //the user's query is stored in a var and given to the state to handle the fetch
    setQuery(userQuery)
    //validations
    userQuery == ''
    ? setErr('No se puede realizar una busqueda vacia.')
    : setIsLoading(true)
  }

  return (
    <>
      <form onSubmit={handleSumit} className="ws-form">
        <input name="userQuery" className="ws-form-input" placeholder="Explora el Universo..." type="search" />
        <button className="ws-form-button">⚲</button>
      </form>

      <Response error={err} isLoading={isLoading} mappedPhotoList={mappedPhotoList} />
    </>
  )
} 