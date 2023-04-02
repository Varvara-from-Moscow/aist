import { Route, Routes } from 'react-router-dom'
import React from 'react'
import * as api from './Api'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/main'
import Equipment from './pages/equipment'
import MainNavigation from './components/Navigation/MainNavigation'
import PopupBag from './components/PopupBag/PopupBag'
import Services from './pages/services'
import IndividualPageOfEquipment from './pages/individualPageOfEquipment'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isBagOpen, setIsBagOpen] = React.useState(false)
  const [popular, setPopular] = React.useState({})
  const [complects, setComplects] = React.useState({})
  const [allProducts, setAllProducts] = React.useState({})
  const [selectedCard, setSelectedCard] = React.useState({})
  const [savedGoods, setSavedGoods] = React.useState([])

  const handleSaveGood = (good) => {
    setSavedGoods([good, ...savedGoods])
  }

  const handleDeleteGood = (good) => {
    setSavedGoods((movies) =>
      movies.filter((g) => g.id !== good.id)
    )
  }

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
        setAllProducts(res)
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
                handleSaveGood={handleSaveGood}
                />
              }
          />

          <Route
              path="/equipment"
              element={
                <Equipment
                onCardClick={handleCardClick}
                isMenuCliked={handleMenuClick}
                handleSaveGood={handleSaveGood}
                isOpen={isMenuOpen}
                onClose={closeAllPopups} 
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

          <Route 
              path='/equipment/:slug' 
              element={
                <IndividualPageOfEquipment
                handleSaveGood={handleSaveGood}
                allProducts={allProducts}
                />
              }
          />

          <Route 
              path='/services/:subcategory'
              element={
                <Equipment
                onCardClick={handleCardClick}
                isMenuCliked={handleMenuClick}
                handleSaveGood={handleSaveGood}
                />
              }
          />
        
      </Routes>
      <MainNavigation
          isOpen={isBurgerMenuOpen}
          onClose={closeAllPopups} 
          isbagCliked={handleBagClick}
      />

      <PopupBag
          onClose={closeAllPopups}
          isOpen={isBagOpen}
          savedGoods={savedGoods}
          handleDelete={handleDeleteGood}
      />
      
      <Footer></Footer>
    </div>
  );
}

export default App;
/*
                onCardClick={handleCardClick}
                isMenuCliked={handleMenuClick}

                      <EquipmentNavigationList
          isOpen={isMenuOpen}
          onClose={closeAllPopups} 
      />
*/