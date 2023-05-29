import './Response.css'

import { Loading } from '../Loading/Loading.jsx'
import { GoPlaceButton } from '../GoPlaceButton/GoPlaceButton.jsx'
import { Error } from '../Error/Error.jsx'
import { PhotoList } from '../PhotoList/PhotoList.jsx'

export function Response({ error, isLoading, mappedPhotoList }) {
  return (
    <>
      <Error error={error} />
      <article className="ws-response">
        <Loading isLoading={isLoading} />
        <PhotoList mappedPhotoList={mappedPhotoList} />
      </article>
      {
        mappedPhotoList &&
        <GoPlaceButton placeToGo='#input' text='Subir' />
      }
    </>
  )
}