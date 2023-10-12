import { useState } from 'react'
import { ThemeProvider } from '../ThemeContext'
import NavHeader from './components/NavHeader'
import { Seccion } from './components/Seccion';
import { Footer } from './components/Footer';



function App() {


  return (
    <>
    <ThemeProvider>
      <NavHeader/>
      <Seccion/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App;
