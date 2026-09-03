import sofa from './assets/01sofa.png'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
    <div className="background">
      <Navbar/>
        <section className="hero">
          <img src={sofa} alt="sofa" style={{ width: '90%' }}/>
        </section>
        
        <section className='top'>
          <h1 className="font-cormorantGaramond primary text-h2">
            VAREL
          </h1>
          <p className="font-canela secondary text-h2">OBJECTS OF PERMANENCE</p>
        </section>
      </div>
    </>
  )
}