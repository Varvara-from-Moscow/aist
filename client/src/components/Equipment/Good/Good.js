import '../EquipmentList/EquipmentList.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'

function Good({ good, onCardClick, onSave, handleChangeButton, savedGoods }) {

    let { slug } = useParams();

    function handleClick() {
        onCardClick(good);
    }

    function handleBagClick() {
        onSave(good);
        handleChangeButton(good);
    }

    //const isButtonChanged = good.is_in_bag === 2
    const isButtonChanged = savedGoods.some(item => item.id === good.id)
/*
    React.useEffect(() => {
      checkBag(good)
    }, [])

    const checkBag = (good) => {
      if((savedGoods.some(item => item.id === good.id))) {
        setIsButtonChanged(true) 
      }else{
        setIsButtonChanged(false) 
      }
    }
 
    const handleChange = (good) => {
        setIsButtonChanged(true) 
    }
*/
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
                        <p className="equipmentList__item-price">Цена {good.price} р.</p>
                        <div className="equipmentList__item-bag-container">
                          {isButtonChanged?
                            <button className="equipmentList__item-added-in-bag">&#x2714;</button>
                          :
                            <button className="equipmentList__item-bag" onClick={handleBagClick}></button>
                          }
                        </div>
                    </div>
                  </div>
                </li>
    );
  }
  
  export default Good;
  //                          <button className="equipmentList__item-bag" onClick={handleBagClick}></button>