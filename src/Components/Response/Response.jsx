import './Response.css'

import { Loading } from '../Loading/Loading.jsx'
import { GoPlaceButton } from '../GoPlaceButton/GoPlaceButton.jsx'
import { Error } from '../Error/Error.jsx'
import { PhotoList } from '../PhotoList/PhotoList.jsx'

export function Response({ error, isLoading, photoList }) {
  return (
    <>
      <Error error={error} />
      <article className="ws-response">
        <Loading isLoading={isLoading} />
        <PhotoList photoList={photoList} />
      </article>
      {
        photoList &&
        <GoPlaceButton placeToGo='#input' text='Subir' />
      }
    </>
  )
}