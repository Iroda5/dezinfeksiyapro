 import './App.scss'
import Navigation from './Components/Navigation/Navigation'
import Asosiy from './Components/Asosiy/Asosiy'
import Haqimizda from './Components/Page/Haqimizda/Haqimizda'
import About from './Components/About/About'
import Xizmatlar from './Components/Page/Xizmatlar/Xizmatlar'
import Xizmatturi from './Components/Xizmatturi/Xizmatturi'
import Kafolat from './Components/Kafolat/Kafolat'
import FAQ from './Components/Page/FAQ/FAQ'
import Footer from './Components/Footer/Footer'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);
  return (
    <>
      <Navigation />
      <Asosiy />
      <button className='box'>Bog`lanish</button>
      <h1 className='haqimizda'>Haqimizda</h1>
      <div className='line'></div>
      <Haqimizda />
      <About />
      <div className='tur'>
        <h1 className='tur__con'>Xizmatlar</h1>
        <p className='tur__text'>Biz sizga samarali va kafolatli xizmat taqdim etamiz.</p>
      </div>
      <Xizmatlar />
   
      <h1 className='haqimizda'>Xizmat Turi</h1>
      <Xizmatturi />
      <Kafolat />
      <FAQ />
      <Footer />
   

      {/* <Outlet/> */}
    </>
  )
}

export default App
