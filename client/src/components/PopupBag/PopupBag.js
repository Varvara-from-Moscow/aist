import React from 'react'
//import { Link } from 'react-router-dom';
import './PopupBag.css'
import Good from './Good/Good'
import * as api from '../../Api'
/*, isPromoOk, error, 
  errorMessage, afterPromo, finalPrice, checkPromo, total, promo*/

function PopupBag({isOpen, onClose, savedGoods, handleDelete, increment, decrement}) {

  const [promoInput, setPromoInput] = React.useState('')
  
  const [promo, setPromo] = React.useState({})
  const [isPromoOk, setIsPromoOk] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [afterPromo, setAfterPromo] = React.useState()

  const [finalPrice, setFinalPrice] = React.useState()

  const [nameInput, setNameInput] = React.useState('')
  const [nameTel, setTelInput] = React.useState()
  const [nameEmail, setEmailInput] = React.useState('')

  const [discount, setDiscount] = React.useState(1)

//Все по первой форме (запрос процента по промокоду)
function handlePromoInputChange(e) {
  setPromoInput(e.target.value);
} 

function handlePromoSubmit(e) {
  e.preventDefault();
  checkPromo(promoInput);
} 

const checkPromo = () => {
    api.checkPromo(promoInput)
      .then(res => {
        setPromo(res)
        setDiscount(res.discount)
        console.log(res)
        setIsPromoOk(true)
        getPriceAfterPromoCode()
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        if (err.status === 400 || 404 ) {
          setErrorMessage('Такаго купона не существует или истек срок его действия.')
          setTimeout(function(){
            setErrorMessage('');
          }, 5000)
        }else{
          setErrorMessage('На сервере произошла ошибка.')
        }
      })
  }

  let total = {
    price: savedGoods.reduce((prev, curr) => { return prev + curr.total_price }, 0),
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
/////

///Формирование конечной/итоговой цены с промокодом или нет, та цена, которую я оправляю с пост запросом
function getFinalPrice() {
    setFinalPrice(total.price * discount) //умножаю цену (всех товаров и колличеств) на коэффицент (изначально истановлен 1, изменяю при запросе купона, устанавливаю значения дискаунта)
  }

  React.useEffect(() => {
    getFinalPrice()
  }, [total.price, afterPromo])
///
///Вторая форма - отправка данных клиента, получение айди заказа и отправда с айди товаров и цены

function handleNameInputChange(e) {
  setNameInput(e.target.value);
}

function handleTelInputChange(e) {
  setTelInput(e.target.value);
}

function handleEmailInputChange(e) {
  setEmailInput(e.target.value);
}

function handleUserAndDataSubmit(e) {
  e.preventDefault();
  postUserDataAndOrder({
    nameTel,
    nameInput,
    nameEmail,
    finalPrice,
    promo
  });
}

/*[
{
"order": 30,///id, который присылают в ответе на пост запрос res.id
"product": 19,//id товара из заказа
"price": 78000,//первоначальная цена товара
"quanity": 2},//количество конкретного товара

{
  "order": 30,
"product": 19,
"price": 78000,
"quanity": 2},

{
  "order": 30,
"product": 19,
"price": 78000,
"quanity": 2},
]
*/

function postUserDataAndOrder(userData){
  api.postUserDataAndOrder({
    phone_order:userData.nameTel,
    first_name:userData.nameInput,
    order_price: finalPrice,
    email:userData.nameEmail,
    cupon: promo.id,
  })
  .then((res) => {
    api.postOrderItems(
      
    )  
  })    
      /*
      .length > 0 && savedGoods.forEach((good)=> (
        {
          'order': res.id,
          'product': good.id,
          'price': good.price,
          'quanity': good.quanity
        },
      ))
      
      {
        order: res.id,
        product: //создать проход по массиву savedGoods и вернуть необходимое кол объектов с необходимыми полями
      }*/

  
  .then((res) => {
    setError(false)
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
    setError(true)
    if (err.status === 400 || 402) {
      setErrorMessage('Ошибка с запросом');
    } else {
      setErrorMessage('На сервере произошла ошибка.')
      setTimeout(function(){
        setErrorMessage('');
      }, 5000)
    }
  })
}

  return (
    <aside className={`bag-popup ${isOpen && 'bag-popup_opened'}`}>
    <div className="bag-popup__container">
      <button className="bag-popup__closebtn" type="button" onClick={onClose}></button>
      <h3 className="bag-popup__title">Ваш заказ</h3>
      <ul className="bag-popup__goods-list">
        {savedGoods.length > 0 && savedGoods.map((good)=> (
          <Good
            key={good.id}
            good={good}
            handleDelete={handleDelete}
            increment={increment}
            decrement={decrement}
          />
        ))}  
      </ul>
      <p className="bag-popup__sum">Сумма: {total.price} p.</p>

      <form className="bag-popup__promocode-container" onSubmit={handlePromoSubmit}>
          <div className="bag-popup__input-and-span">
            <span className="bag-popup__promocode-span">Промокод (При наличии)</span>
            <input 
              className="bag-popup__input-promocode"
              name="promoInput"
              type="text"
              onChange={handlePromoInputChange}
            ></input>
          </div>
          <button className="bag-popup__btn-check-promocode" onClick={checkPromo}>Применить промокод</button>
      </form>

      {isPromoOk? <span className="bag-popup__promocode-luck-message">Сумма после применения купона: {finalPrice} р.</span> : <span></span>}
      {error? <span className="bag-popup__promocode-err-message">{errorMessage}</span> : <span></span>}

      <form className="bag-popup__form" onSubmit={handleUserAndDataSubmit}>

        <span className="bag-popup__input-span">Имя*</span>
        <input 
          className="bag-popup__input"
          name="name"
          type="text"
          onChange={handleNameInputChange}
        />
        <span className="bag-popup__input-span">Телефон*</span>
        <input 
          className="bag-popup__input"
          name="tel"
          type="tel"
          onChange={handleTelInputChange}
        />
        <span className="bag-popup__input-span">Email</span>
        <input 
          className="bag-popup__input"
          name="email"
          type="email"
          onChange={handleEmailInputChange}
        />

        <p className="bag-popup__input-sum">Сумма: {total.price} р.</p>
        <p className="bag-popup__input-sum-after-promocod">Итоговая сумма: {finalPrice} р.</p>

        <button type="submit" className="bag-popup__button">Заказать</button>

      </form>

    </div>
  </aside>
  )
}

export default PopupBag;
//isPromoOk &&  
//onClick={postUserDataAndOrder}