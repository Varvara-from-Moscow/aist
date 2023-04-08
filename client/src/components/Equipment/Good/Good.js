import '../EquipmentList/EquipmentList.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Good({good, onCardClick, onSave, increment, decrement}) {

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

//<div className="equipmentList__item-pic-container">
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
                          <button className="equipmentList__item-bag" onClick={handleBagClick}></button>

                        </div>
                    </div>
                  </div>
                </li>
    );
  }
  
  export default Good;

  /*
  
                            <div className="equipmentList__item-increament-container">
                            <button className="equipmentList__item-increament" onClick={handleIncrement}>+</button>
                            <div className="equipmentList__item-count">{good.quanity}</div>
                            <button className="equipmentList__item-decrement" onClick={handleDecrement}>-</button>
                          </div>
  
  
  */
 /*
 <div className="equipmentList__item-star-container">
                            <div className="equipmentList__item-estimation">{good.rating}</div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-estimation">(4)</div>
                        </div>*/