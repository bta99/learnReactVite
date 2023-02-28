import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Modal from './components/Modal'
// import './App.css'

function App() {
  const [color, setColor] = useState(false)

  return (
    <div className="App" style={{
      width:'100vh',height:'100vh',backgroundColor:'pink',display:'flex',justifyContent:'center',alignItems:'center',
    }}>
     <Modal/>
    </div>
  )


}

export default App
