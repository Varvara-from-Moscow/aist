import React from 'react'
//import { Link } from 'react-router-dom';
import './PopupBag.css'
import Good from './Good/Good'


function PopupBag({isOpen, onClose, savedGoods, handleDelete, increment, decrement}) {

  //const [goods, setGoods] = React.useState([savedGoods])

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
            /*onCardClick={onCardClick}*/
          />
        ))}  
      </ul>
      <p className="bag-popup__sum">Сумма:{} p.</p>
      <form className="bag-popup__form">
        <span className="bag-popup__input-span">Имя*</span>
        <input className="bag-popup__input"></input>
        <span className="bag-popup__input-span">Телефон*</span>
        <input className="bag-popup__input"></input>
        <span className="bag-popup__input-span">Email</span>
        <input className="bag-popup__input"></input>
        <span className="bag-popup__input-span">Промокод (При наличии)</span>
        <input className="bag-popup__input"></input>


        <p className="bag-popup__input-sum">Сумма: {} р.</p>
        <p className="bag-popup__input-sum-after-promocod">Итоговая сумма: {} р.</p>

      <button type="submit" className="bag-popup__button">Заказать</button>
      </form>
    </div>
  </aside>
  )
}

export default PopupBag;