import React from 'react'
import './PopupBag.css'
import Good from './Good/Good'

function PopupBag({changeValue, handleChangeButtonAfterDeletefromBag, finalPrice, postUserDataAndOrder, error, errorMessage, promo, isPromoOk, isOpen, onClose, savedGoods, handleDelete, increment, decrement, total, checkPromo}) {

  const [promoInput, setPromoInput] = React.useState('')
  const [nameInput, setNameInput] = React.useState('')
  const [nameTel, setTelInput] = React.useState()
  const [nameEmail, setEmailInput] = React.useState('')
  

//Все по первой форме (запрос процента по промокоду)
function handlePromoInputChange(e) {
  setPromoInput(e.target.value);
} 

function handlePromoSubmit(e) {
  e.preventDefault();
  checkPromo(promoInput);
} 

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
let totalPrice = (new Intl.NumberFormat('ru-RU').format(total.price));
let totalFinalPrice = (new Intl.NumberFormat('ru-RU').format(finalPrice));

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
            handleChangeButtonAfterDeletefromBag={handleChangeButtonAfterDeletefromBag}
            increment={increment}
            decrement={decrement}
            changeValue={changeValue}
          />
        ))}  
      </ul>
      <p className="bag-popup__sum">Сумма: {totalPrice} p.</p>

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
          <button className="bag-popup__btn-check-promocode">Применить промокод</button>
      </form>

      {isPromoOk? <span className="bag-popup__promocode-luck-message">Сумма после применения купона: {totalFinalPrice} р.</span> : <span></span>}
      {error? <span className="bag-popup__promocode-err-message">{errorMessage}</span> : <span></span>}

      <form className="bag-popup__form" onSubmit={handleUserAndDataSubmit}>

        <span className="bag-popup__input-span">Имя*</span>
        <input 
          className="bag-popup__input"
          name="name"
          type="text"
          minLength="1"
          onChange={handleNameInputChange}
        />
        <span className="bag-popup__input-span">Телефон*</span>
        <input 
          className="bag-popup__input"
          name="tel"
          type="tel"
          minLength="11"
          onChange={handleTelInputChange}
        />
        <span className="bag-popup__input-span">Email</span>
        <input 
          className="bag-popup__input"
          name="email"
          type="email"
          onChange={handleEmailInputChange}
        />

        <p className="bag-popup__input-sum">Сумма: {totalPrice} р.</p>
        <p className="bag-popup__input-sum-after-promocod">Итоговая сумма: {totalFinalPrice} р.</p>

        <button type="submit" className="bag-popup__button">Заказать</button>

      </form>

    </div>
  </aside>
  )
}

export default PopupBag;