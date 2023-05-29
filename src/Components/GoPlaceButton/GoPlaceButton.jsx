import './GoPlaceButton.css'

export function GoPlaceButton({ placeToGo, text }) {
  return (
    <button className='GoPlaceButton'><a href={placeToGo}>{text}</a></button>
  )
}