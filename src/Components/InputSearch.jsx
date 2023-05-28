import { useState } from 'react'
import { useGetPhotoList } from '../hooks/useGetPhotoList'
//CSS
import './InputSearch.css'
//Components
import {Response} from './Response.jsx'


export function InputSearch() {
  
  const [query, setQuery] = useState()
  const {photoList, err, setErr, isLoading, setIsLoading} = useGetPhotoList({query}) 

  const handleSumit = event => {
    event.preventDefault()
    setErr()
    const keywords = document.getElementById('input').value
    setQuery(keywords)
    setIsLoading(true)
  }
  
  return(
    <>
      <form onSubmit={handleSumit}  className="ws-form">
        <input id="input" className="ws-form-input" placeholder="Explora el Universo..." type="search" />
        <button className="ws-form-button">⚲</button>
      </form>

     <Response error={err} isLoading={isLoading} photoList={photoList} />
    </>
  )
} 