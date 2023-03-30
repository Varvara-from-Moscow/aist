import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import React from 'react'
import * as api from './Api'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/main'
import Equipment from './pages/equipment'
import MainNavigation from './components/Navigation/MainNavigation'
import EquipmentNavigationList from './components/Navigation/EquipmentNavigationList'
import PopupBag from './components/PopupBag/PopupBag'
import Services from './pages/services'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isBagOpen, setIsBagOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [popular, setPopular] = React.useState({})
  const [complects, setComplects] = React.useState({})


  React.useEffect(() => {
    getPopular()
  }, [])

  const getPopular = () => {
    api.getPopular()
      .then(res => {
        setPopular(res)
        console.log(res)
      })
  }

  React.useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    api.getAllProducts()
      .then(res => {
        console.log(res)
      })
  }

  React.useEffect(() => {
    getComplects()
  }, [])

  const getComplects = () => {
    api.getComplects()
      .then(res => {
        setComplects(res)
      })
  }

  function handleCardClick(card) {
    setSelectedCard(card.id);
  }

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true)
  }

  function handleMenuClick() {
    setIsMenuOpen(true)
  }

  function handleBagClick() {
    setIsBagOpen(true)
    console.log('click bag')
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false)
    setIsMenuOpen(false)
    setIsBagOpen(false)
  }

  return (
    <div className="App">
      <Header
          isBurgerMenuCliked={handleBurgerMenuClick}
          isbagCliked={handleBagClick}
      />

      <Routes>

          <Route
              exact path="/"
              element={
                <Main
                popular={popular}
                complects={complects}
                />
              }
          />

          <Route
              path="/equipment"
              element={
                <Equipment
                onCardClick={handleCardClick}
                isMenuCliked={handleMenuClick}
                />
              }
          />

          <Route
              path="/services"
              element={
                <Services
                />
              }
          />
        
      </Routes>
      <MainNavigation
          isOpen={isBurgerMenuOpen}
          onClose={closeAllPopups} 
          isbagCliked={handleBagClick}
      />
      <EquipmentNavigationList
          isOpen={isMenuOpen}
          onClose={closeAllPopups} 
      />
      <PopupBag
          onClose={closeAllPopups}
          isOpen={isBagOpen}
      />
      
      <Footer></Footer>
    </div>
  );
}

export default App;
/*
                onCardClick={handleCardClick}
                isMenuCliked={handleMenuClick}
*/