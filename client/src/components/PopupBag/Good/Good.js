import React from 'react'
//import { Link } from 'react-router-dom';
import '../PopupBag.css'


function Good({good, handleDelete, decrement, increment}) {

    function handleDeleteGood() {
        handleDelete(good)
    }

    function handleIncrement() {
      increment(good.id)
    }

    function handleDecrement() {
      decrement(good.id)
    }

  return (

        <li className="bag-popup__good">

          <div className='bag-popup__good-img-container'>
            <img className="bag-popup__good-img" src={good.image}></img>
          </div>  
          <div className="bag-popup__good-desctiption-container">
            <p className="bag-popup__good-name">{good.name}</p>
          </div>

          <div className="bag-popup__good-price-container">

            <div className="bag-popup__item-increament-container">
                <button className="bag-popup__item-increament" onClick={handleIncrement}>+</button>
                <div className="bag-popup__item-count">{good.quanity}</div>
                <button className="bag-popup__item-decrement" onClick={handleDecrement}>-</button>
            </div>


            <div className="bag-popup__good-price">{good.total_price}</div>
            <button className="bag-popup__good-delete-btn" onClick={handleDeleteGood}></button>
          </div>  

        </li>
  )
}

export default Good;
//good.priceTotal
////<p className="bag-popup__good-description">{}</p>

//type="number" min='1' value={good.quanity}