import './Response.css'
import {Loading} from './Loading.jsx'
import { GoPlaceButton } from './GoPlaceButton.jsx'

export function Response({error, isLoading, photoList}){
  return(
    <>
      {
        error &&
          <p>{error}</p>
      }
      <article className="ws-response">
          {
            isLoading &&
              <Loading />
          }
          {
            photoList &&
              photoList.map((photo) =>{
                  return(
                    <div key={photo.id} className="ws-response-item">
                      <img className="ws-response-item-img" src={photo.urls.small} alt={photo.alt_description}/>
                      <div className="ws-response-item-info">
                        <button className="ws-response-item-info-button">
                          <a href={photo.links.download}><span className="material-symbols-outlined">download</span></a>
                        </button>
                      </div>
                    </div>
                  )
                })
            }
      </article>
      {
        photoList &&
        <GoPlaceButton placeToGo='#input' text='Subir'/>
      }
      
    </>
  )
}