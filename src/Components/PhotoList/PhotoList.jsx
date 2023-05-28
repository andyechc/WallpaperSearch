import './PhotoList.css'

export function PhotoList({ photoList }) {
    return (
      <>
        {photoList &&
          photoList.map((photo) => {
            return (
              <div key={photo.id} className="ws-response-item">
                <img className="ws-response-item-img" src={photo.urls.small} alt={photo.alt_description} />
                <div className="ws-response-item-info">
                  <button className="ws-response-item-info-button">
                    <a target='_blank' href={photo.links.download}><span className="material-symbols-outlined">download</span></a>
                  </button>
                </div>
              </div>
            )
          })}
      </>
    )
  }