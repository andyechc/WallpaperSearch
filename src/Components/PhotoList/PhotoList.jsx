import './PhotoList.css'

export function PhotoList({ photoList }) {
  return (
    <>
      {
        photoList &&
        photoList.map(photo => (
          <div key={photo.id} className="ws-response-item">
            <img className="ws-response-item-img" src={photo.src} alt={photo.alt} />
            <div className="ws-response-item-info">
              <button className="ws-response-item-info-button">
                <a target='_blank' href={photo.download}><span className="material-symbols-outlined">download</span></a>
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}