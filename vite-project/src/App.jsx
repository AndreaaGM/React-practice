import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Contacto from './components/Contacto'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Bienvenidos a Vite</h1>
     <Card nombre={"Andrea"} email= " andy@dh.com" />
     <Card nombre={"Clau"} email= " clau@dh.com" />
     <Card nombre={"Ingrid"} email= " ing@dh.com" />
     <Contacto />   

     
    </>
  )
}

export default App
