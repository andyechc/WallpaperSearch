import './App.css'
//components
import {InputSearch} from './Components/InputSearch.jsx'
import {Footer} from './Components/footer.jsx'
import {Logo} from './Components/Logo.jsx'

export default function App() {
  return (
    <main className="ws">
      <section className="ws-info">
        <Logo />
        <span className="ws-info-title">Wallpaper Search</span>
        <span className="ws-info-text">Contamos con una increíble cantidad de imagenes...</span>
      </section>
      
      <InputSearch />
      <span className='ws-quote'>Potencializado por <a href='https://unsplash.com'>Unsplash</a></span>
      <Footer/>
    </main>
  )
}
  