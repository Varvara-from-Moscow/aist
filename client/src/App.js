import { Route, Routes, useLocation } from 'react-router-dom'
import {isMobile} from 'react-device-detect'
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
import Information from './pages/Information'
import PopapLuckySendForm from './components/PopapLuckySendForm/PopapLuckySendForm'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isBagOpen, setIsBagOpen] = React.useState(false)
  const [isLuckyFormPopapOpen, setLuckyFormPopapOpen] = React.useState(false)
  const [popular, setPopular] = React.useState({})
  const [complects, setComplects] = React.useState({})
  const [allProducts, setAllProducts] = React.useState({})
  const [selectedCard, setSelectedCard] = React.useState({})
  const [savedGoods, setSavedGoods] = React.useState([])
  const [promo, setPromo] = React.useState({})
  const [isPromoOk, setIsPromoOk] = React.useState(false)
  const [discount, setDiscount] = React.useState(1)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [finalPrice, setFinalPrice] = React.useState()
  const [afterPromo, setAfterPromo] = React.useState()
  const [isAdded, setIsAdded] = React.useState(false)
  const [isResize, setIsResize] = React.useState(false)
  const [services, setServices] = React.useState({})
  const [servicesAfterFilter, setServicesAfterFilter] = React.useState({})
  const [category, setCategory] = React.useState({})
  const [showLoading, setShowLoading] = React.useState(false)

  React.useEffect(() => {
    getServices()
  }, [])

  const getServices = () => {
    api.getServices({
      })
      .then(res => {
        setServices(res)
        setServicesAfterFilter(res)
      })
  } 

  React.useEffect(() => {
    getServicesCategory()
  }, [])

  const getServicesCategory = () => {
    api.getServicesCategory()
      .then(res => {
        setCategory(res)
      })
  }

  function handleChoseCategory(equipment, subCategory) {
    return equipment.filter((item) => item.subcategory === subCategory)
  }

  function getServicesAfterFilter(services, subCategory) {
    const result = handleChoseCategory(services, subCategory)
    setServicesAfterFilter(result)
  }

  function getAllServices() {
    setServicesAfterFilter(services)
  }
  
  const handleResize = () => {
    if (window.innerWidth < 1100) {
      setIsResize(true)
    } else {
      setIsResize(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("load", handleResize)
    window.addEventListener("resize", handleResize)
    window.addEventListener("reload", handleResize)
    window.addEventListener("orientationchange", handleResize)
  })

  const handleSaveGood = (good) => {
    if(!(savedGoods.some(item => item.id === good.id))) {
      setSavedGoods([good, ...savedGoods])
    }else{
      return
    }
  }

  const handleDeleteGood = (id) => {
    setSavedGoods((goods) =>
    goods.filter((g) => g.id !== id)
    )
  }

  function increment(id) {
    setSavedGoods((goods) => {
      return goods.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            //quantity: ++ product.quantity,
            //total_price: product.quantity * product.price,
            quantity: product.quantity +1,
            total_price: (product.quantity +1) * product.price,
          }
        }
        return product
      })
    })
  }

  function decrement(id) {
    setSavedGoods((goods) => {
      return goods.map((product) => {
        if (product.id === id) {

         const newQuantity = product.quantity - 1 > 1 ? product.quantity - 1 : 1

          return {
            ...product,
            quantity: newQuantity,
            total_price: newQuantity * product.price,
          }
        }
        return product
      })
    })
  }

  const changeValue = (id, value) => {
    setSavedGoods((good) => {
      return good.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: value,
            total_price: value * product.price,
          }
        }
        return product
      })
    })
  }


  let total = {
    price: savedGoods.reduce((prev, curr) => { return prev + curr.total_price }, 0),
    count: savedGoods.reduce((prev, curr) => { return prev + curr.quantity }, 0),
  } 

  const checkPromo = (promoInput) => {
    api.checkPromo(promoInput)
      .then(res => {
        setPromo(res)
        setDiscount(res.discount)
        setIsPromoOk(true)
        getPriceAfterPromoCode()
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        if (error.match(404)) {
          setErrorMessage('Такого купона не существует или истек срок его действия.')
        }else{
          setErrorMessage('Произошла ошибка, попробуйте еще раз')
        }
      })
      .finally(() => {
        deleteErrorMessage()
      });
  }

  function postUserDataAndOrder(userData){
    setShowLoading(true)
    api.postUserDataAndOrder({
      phone_order:userData.nameTel,
      first_name:userData.nameInput,
      order_price: finalPrice,
      email:userData.nameEmail,
      cupon: promo.id,
    }) 
    .then((res) => {
      savedGoods.forEach((item) => {
        item.order = res.id
        item.product = item.id
      })
    })
    .then((res) => {
      api.postOrderItems(
        savedGoods
      )
    })
    .then((res) => {
      setSavedGoods([])
      setError(false)
      setLuckyFormPopapOpen(true)
      setDiscount(1)
      setAfterPromo()
      setFinalPrice()
      setIsPromoOk(false)
      setPromo({})
      setIsAdded(false)
    })
    .catch((error) => {
      setError(true)
      if (error.match(400)) {
        setErrorMessage('Ошибка с запросом');
      } else {
        setErrorMessage('На сервере произошла ошибка')
      }
    })
    .finally(() => {
      setShowLoading(false)
      deleteErrorMessage()
    });
  }

  function getPriceAfterPromoCode() { 
    if((promo.discount !== undefined) && (promo.discount >= 0.1)){
      setAfterPromo (total.price * promo.discount)
    }else{
      return
    }
  }

  React.useEffect(() => {
    getPriceAfterPromoCode()
  }, [promo.discount !== undefined])

///Формирование конечной/итоговой цены с промокодом или нет, та цена, которую я оправляю с пост запросом
function getFinalPrice() {
    setFinalPrice(total.price * discount) //умножаю цену (всех товаров и колличеств) на коэффицент (изначально истановлен 1, изменяю при запросе купона, устанавливаю значения дискаунта)
  }

  React.useEffect(() => {
    getFinalPrice()
  }, [total.price, afterPromo])
///

  React.useEffect(() => {
    getPopular()
  }, [])

  const getPopular = () => {
    api.getPopular()
      .then(res => {
        setPopular(res)
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

  const postBackCall = (userData) => {
    setShowLoading(true)
    api.postBackCall({
      name:userData.name,
      phone_number:userData.tel,
    })
      .then(res => {
        setLuckyFormPopapOpen(true)
      })
      .catch((error) => {
        setError(true)
        if (error.match(406)) {
          setErrorMessage('Вы уже отправили заявку на обратный звонок')
        }else if (error.match(400)){
          setErrorMessage('Введен некорректный номер телефона')
        }else{
          setErrorMessage('Произошла ошибка, попробуйте еще раз')
        }
      })
      .finally(() => {
        setShowLoading(false)
        deleteErrorMessage()
      });
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
  }
  
  function closeAllPopups() {
    setIsBurgerMenuOpen(false)
    setIsMenuOpen(false)
    setIsBagOpen(false)
    setLuckyFormPopapOpen(false)
  }

  function deleteErrorMessage(){
    setTimeout(function(){
      setErrorMessage('');
    }, 3000)
  }

  return (
    <div className="App">
      <Header
          isBurgerMenuCliked={handleBurgerMenuClick}
          isbagCliked={handleBagClick}
          total={total} 
          isResize={isResize}
          isMobile={isMobile}
          services={services}
          getAllServices={getAllServices}
      />

      <Routes>

          <Route
              exact path="/"
              element={
                <Main
                isAdded={isAdded}
                popular={popular}
                complects={complects}
                handleSaveGood={handleSaveGood}
                postBackCall={postBackCall}
                showLoading={showLoading}
                errorMessage={errorMessage}
                error={error}
                savedGoods={savedGoods}
                services={services}
                getServicesAfterFilter={getServicesAfterFilter}//для сортировки при выборе услуг на главной странице
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
                increment={increment}
                decrement={decrement}
                savedGoods={savedGoods}
                isResize={isResize}
                isMobile={isMobile}
                />
              }
          />

          <Route
              path="/services"
              element={
                <Services
                handleSaveGood={handleSaveGood}
                isOpen={isMenuOpen}
                isMenuCliked={handleMenuClick}
                onClose={closeAllPopups} 
                savedGoods={savedGoods}
                isResize={isResize}
                isMobile={isMobile}
                services={services}
                servicesAfterFilter={servicesAfterFilter}
                category={category}
                getServicesAfterFilter={getServicesAfterFilter}
                getAllServices={getAllServices}
                />
              }
          />

          <Route 
              path='/equipment/:slug' 
              element={
                <IndividualPageOfEquipment
                handleSaveGood={handleSaveGood}
                allProducts={allProducts}
                postBackCall={postBackCall}
                errorMessage={errorMessage}
                error={error}
                savedGoods={savedGoods}
                />
              }
          />

          <Route 
              path='/services/:slug'
              element={
                <IndividualPageOfEquipment
                handleSaveGood={handleSaveGood}
                allProducts={allProducts}
                postBackCall={postBackCall}
                errorMessage={errorMessage}
                error={error}
                savedGoods={savedGoods}
                />
              }
          />

          <Route 
              path='/information'
              element={
                <Information
                />
              }
          />
        
      </Routes>
      <MainNavigation
          isOpen={isBurgerMenuOpen}
          onClose={closeAllPopups} 
          isbagCliked={handleBagClick}
          total={total}
          getAllServices={getAllServices}
      />

      <PopupBag
          onClose={closeAllPopups}
          isOpen={isBagOpen}
          savedGoods={savedGoods}
          handleDelete={handleDeleteGood}
          increment={increment}
          decrement={decrement}
          total={total}
          checkPromo={checkPromo}
          discount={discount}
          isPromoOk={isPromoOk} 
          promo={promo}
          errorMessage={errorMessage}
          error={error}
          postUserDataAndOrder={postUserDataAndOrder}
          finalPrice={finalPrice}
          changeValue={changeValue}
          showLoading={showLoading}
      />
      <PopapLuckySendForm
      onClose={closeAllPopups}
      isOpen={isLuckyFormPopapOpen}
      />
      
      <Footer></Footer>
    </div>
  );
}

export default App;
