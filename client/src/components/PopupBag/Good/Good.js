import React from 'react'
//import { Link } from 'react-router-dom';
import '../PopupBag.css'


function Good({good, handleDelete}) {

    function handleDeleteGood() {
        handleDelete(good)
    }

  return (

        <li className="bag-popup__good">
          <div className='bag-popup__good-img-container'>
            <img className="bag-popup__good-img" src={good.image}></img>
          </div>  
          <div className="bag-popup__good-desctiption-container">
            <p className="bag-popup__good-name">{good.name}</p>
            <p className="bag-popup__good-description">{}</p>
          </div>

          <div className="bag-popup__good-price-container">
            <div className="bag-popup__item-increament-container">
                <button className="bag-popup__item-increament">+</button>
                <div className="bag-popup__item-count">0</div>
                <button className="bag-popup__item-decrement">-</button>
            </div>
            <div className="bag-popup__good-price">{good.price}</div>
            <button className="bag-popup__good-delete-btn" onClick={handleDeleteGood}></button>
          </div>  
        </li>
  )
}

export default Good;