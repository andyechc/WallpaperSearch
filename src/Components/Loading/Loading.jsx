import './Loading.css'
//a spinner with an animation
export function Loading({isLoading}){
  return(
    <>
      {
      isLoading &&
        <div className="loading"></div>
      }
    </>
  )
}