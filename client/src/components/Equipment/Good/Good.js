import React from 'react'
import { useParams, Link } from 'react-router-dom'
import '../EquipmentList/EquipmentList.css'


function Good({ good, onCardClick, onSave, savedGoods, increment, decrement }) {

  let price = (new Intl.NumberFormat('ru-RU').format(good.price));

    let { slug } = useParams();

    function handleClick() {
        onCardClick(good);
    }

    function handleBagClick() {
        onSave(good);
    }

    function handleIncrement() {
      increment(good.id)
    }

    function handleDecrement() {
      decrement(good.id)
    }

    const isButtonChanged = savedGoods.some(item => item.id === good.id)
    let result = savedGoods.find(item => item.id === good.id)
   

    return (
      <li className="equipmentList__item">
                  
        <Link to={`/equipment/${good.slug}`} className="equipmentList__item-pic-link">
          <img src={good.image} alt = {good.name} onClick={handleClick} className="equipmentList__item-pic"></img>
        </Link>
                  
        <div className="equipmentList__item-main-container">
        <div className="equipmentList__item-wrapper-star">
          <h3 className="equipmentList__item-title">{good.name}</h3>             
        </div>

        <div className="equipmentList__item-wrapper">      
          <p className="equipmentList__item-price-span">{price}<span className="equipmentList__item-price">р.</span> </p>
        <div className="equipmentList__item-bag-container">
            <button className="equipmentList__item-bag" onClick={handleBagClick}></button>
          <div className="equipmentList__item-increament-container">

          {isButtonChanged?
            <button className="equipmentList__item-increament" onClick={handleIncrement}>+</button>
          :
          <button className="equipmentList__item-increament" onClick={handleBagClick}>+</button>
          }
            {isButtonChanged?
              <div className="equipmentList__item-count">{result.quantity}</div>
            :
              <div className="equipmentList__item-count">0</div>
            }
            <button className="equipmentList__item-decrement" onClick={handleDecrement}>-</button>
          </div>
        </div>
        </div>
        </div>
      </li>
    );
  }
  
  export default Good;
//{good.quantity}
/*
          {isButtonChanged?
            <button className="equipmentList__item-added-in-bag">&#x2714;</button>
          :
            <button className="equipmentList__item-bag" onClick={handleBagClick}></button>
          }
*/