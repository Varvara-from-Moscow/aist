import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/main'
import Equipment from './pages/equipment'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
    console.log('click')
  }

  function handleMenuClick() {
    setIsMenuOpen(true)
    console.log('click menu')
  }

  return (
    <div className="App">
      <Header
          isBurgerMenuCliked={handleBurgerMenuClick}
      />

      <Routes>

          <Route
              exact path="/"
              element={
                <Main/>
              }
          />

          <Route
              path="/equipment"
              element={
                <Equipment
                isMenuCliked={handleMenuClick}/>
              }
          />
        
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
