import React from 'react'
import './PopupBag.css'
import Good from './Good/Good'

function PopupBag({showLoading, changeValue, handleChangeButtonAfterDeletefromBag, finalPrice, postUserDataAndOrder, error, errorMessage, promo, isPromoOk, isOpen, onClose, savedGoods, handleDelete, increment, decrement, total, checkPromo}) {

  const [promoInput, setPromoInput] = React.useState('')
  const [nameInput, setNameInput] = React.useState('')
  const [nameTel, setTelInput] = React.useState('+7')
  const [nameEmail, setEmailInput] = React.useState('')
  const [errorTelMessage, setErrorTelMessage] = React.useState('')
  const [isErrorTel, setIsErrorTel] = React.useState(false)
  const [errorNameMessage, setErrorNameMessage] = React.useState('')
  const [isErrorName, setIsErrorName] = React.useState(false)

  const [isFormValid, setIsFormValid] = React.useState(false)
  const [isPromoValid, setIsPromoValid] = React.useState(false)


React.useEffect(() => {
  if(promoInput) {
    setIsPromoValid(true)
  }else{
    setIsPromoValid(false)
  }
}, [promoInput])

  function handleValideCheck() {
    if ((finalPrice > 1) && (savedGoods.length > 0) && (nameTel.length === 12) && (nameInput.length > 0) && (isErrorName  === false) && (isErrorTel === false)) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }  

  React.useEffect(() => {
    handleValideCheck()
  },[nameInput, nameTel, savedGoods, finalPrice])
  
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
  setIsErrorName(false)
  if (e.target.value.length < 2) {
    setIsErrorName(true)
    setErrorNameMessage('Введите ваше имя')
    setTimeout(function(){
      setErrorNameMessage('');
    }, 2000)
  } else {
    setIsErrorName(false)
    setErrorNameMessage('')
  }
  setNameInput(e.target.value);
}
/*
function handleTelInputChange(e) {

  if (e.target.value.slice(0,2) === '+7') {
    setTelInput(e.target.value.replace(/\D$/, '')
  )
  const letter = /\D/g
   if (letter.test(e.nativeEvent.data)) {
    setTelInput(e.target.value.replace(/.{0,}/, '+7')
    )
    console.log(e.nativeEvent.data)
      setIsErrorTel(true)
      setErrorTelMessage('Вводите только цифры, без букв и знаков')
      setTimeout(function(){
        setErrorTelMessage('');
      }, 2000)
   }
  }else {
    setTelInput(e.target.value.replace(/.{0,}/, '+7'))

  }if (nameTel.length > 12) {
    setIsErrorTel(true)
    setErrorTelMessage('Вы ввели более 12 символов, введите не более 12 символов')
    console.log('Введите числа, без пробелов или буквенных значений')
  } 
}*/

function handleTelInputChange(e) {
  setIsErrorTel(false)
  if (e.target.value.slice(0,2) === '+7') {
    setTelInput(e.target.value.replace(/\D$/, ''))
  const letter = /\D/g
    if (letter.test(e.nativeEvent.data)) {
      setTelInput(e.target.value.replace(/.{0,}/, '+7')
    )
    //console.log(e.nativeEvent.data)
      setIsErrorTel(true)
      setErrorTelMessage('Вводите только цифры, без букв и знаков')
      setTimeout(function(){
        setErrorTelMessage('');
      }, 2000)
   }
   
  } else {
    setTelInput(e.target.value.replace(/.{0,}/, '+7'))
  } 

  if (nameTel.length > 11) {
    setIsErrorTel(true)
    setErrorTelMessage('Вы ввели более 12 символов, введите не более 12 символов')
    console.log('Введите числа, без пробелов или буквенных значений')
  } 

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

      <form 
        className="bag-popup__promocode-container" 
        onSubmit={handlePromoSubmit}>
          <div className="bag-popup__input-and-span">
            <span className="bag-popup__promocode-span">Промокод (При наличии)</span>
            <input 
              className="bag-popup__input-promocode"
              name="promoInput"
              type="text"
              minLength="1"
              onChange={handlePromoInputChange}
            ></input>
          </div>
          <button 
            className="bag-popup__btn-check-promocode"
            disabled={!isPromoValid}>
            Применить промокод
          </button>
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
          minLength="12"
          onChange={handleTelInputChange}
          value={nameTel}
        />
        {isErrorTel? <span className="bag-popup__promocode-err-message">{errorTelMessage}</span>:<span></span>}
        <span className="bag-popup__input-span">Email</span>
        <input 
          className="bag-popup__input"
          name="email"
          type="email"
          onChange={handleEmailInputChange}
        />

        <p className="bag-popup__input-sum">Сумма: {totalPrice} р.</p>
        <p className="bag-popup__input-sum-after-promocod">Итоговая сумма: {totalFinalPrice} р.</p>

        <button 
          type="submit" 
          className={`bag-popup__button ${isFormValid && 'bag-popup__button_active'}`}
          disabled={!isFormValid}>
          {showLoading ? 'Заявка отправляется...' : 'Заказать'}
        </button>

      </form>

    </div>
  </aside>
  )
}

export default PopupBag;