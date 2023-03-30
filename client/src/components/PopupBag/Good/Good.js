import React from 'react'
//import { Link } from 'react-router-dom';
import '../PopupBag.css'


function Good({good}) {

  return (

        <li className="bag-popup__good">
          <img className="bag-popup__good-img"></img>
          <div className="bag-popup__good-desctiption-container">
            <p className="bag-popup__good-name">{good.name}</p>
            <p className="bag-popup__good-description">{}</p>
          </div>
          <div className="bag-popup__good-increament"></div>
          <div className="bag-popup__good-price">{good.price}</div>
          <button className="bag-popup__good-delete-btn"></button>
        </li>
  )
}

export default Good;