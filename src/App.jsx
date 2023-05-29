import './App.css'
//components
import { InputSearch } from './Components/InputSearch/InputSearch.jsx'
import { Footer } from './Components/Footer/footer.jsx'
import { Logo } from './Components/Logo/Logo.jsx'

export default function App() {
  return (
    <div className="ws">
      <header className="ws-header" id='header'>
        <Logo />
        <span className="ws-header-title">Image Search</span>
        <span className="ws-header-text">Contamos con una increíble cantidad de imagenes...</span>
      </header>

      <main>
        <InputSearch />
        <span className='ws-quote'>Potencializado por <a href='https://unsplash.com'>Unsplash</a></span>
      </main>
      <Footer />
    </div>
  )
}
