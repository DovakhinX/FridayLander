import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Hero/Hero'
import Webgl from './Components/webgl/Webgl'
import { Canvas } from '@react-three/fiber'
function App() {

  return (
    <div>
      <section className='boss'>
        <div className='navSection'>
          <Navbar />
        </div>
        <div className='heroSection'>
          <Hero />
        </div>
      </section>
      <section className='webglSection'>
        <div className='exp'>
          <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
            <ambientLight intensity={0.3} color="rgb(74, 189, 176)" />
            <pointLight color="rgb(64, 169, 156)" position={[10, 10, 10]} intensity={0.5} />
            <Webgl />
          </Canvas>
        </div>
      </section>
    </div>
  )
}

export default App
