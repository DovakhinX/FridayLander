import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Hero/Hero'



function App() {


  return (
    <div className='boss'>
      <div className='navSection'>
        <Navbar/>
      </div>
<div className='heroSection'>
  <Hero/>
</div>

    </div>
  )
}

export default App
