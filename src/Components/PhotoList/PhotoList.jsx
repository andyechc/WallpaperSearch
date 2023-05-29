import './PhotoList.css'

export function PhotoList({ mappedPhotoList }) {
  return (
    <>
      {
        mappedPhotoList &&
        <div key={mappedPhotoList.id} className="ws-response-item">
          <img className="ws-response-item-img" src={mappedPhotoList.src} alt={mappedPhotoList.alt} />
          <div className="ws-response-item-info">
            <button className="ws-response-item-info-button">
              <a target='_blank' href={mappedPhotoList.download}><span className="material-symbols-outlined">download</span></a>
            </button>
          </div>
        </div>
      }
    </>
  )
}