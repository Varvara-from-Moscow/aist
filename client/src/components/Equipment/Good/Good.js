import '../EquipmentList/EquipmentList.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Good({good, onCardClick, onSave}) {

    let { slug } = useParams();

    function handleClick() {
        onCardClick(good);
    }

    function handleBagClick() {
        onSave(good);
    }



    return (
                <li className="equipmentList__item">
                  <div className="equipmentList__item-pic-container">
                  <Link to={`/equipment/${good.slug}`} className="equipmentList__item-pic-link">
                    <img src={good.image} alt = {good.name} onClick={handleClick} className="equipmentList__item-pic"></img>
                  </Link>
                  </div>
                  <div className="equipmentList__item-main-container">
                    <div className="equipmentList__item-wrapper-star">
                        <h3 className="equipmentList__item-title">{good.name}</h3>
                        <div className="equipmentList__item-star-container">
                            <div className="equipmentList__item-estimation">{good.rating}</div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-estimation">(4)</div>
                        </div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">Цена {good.price} р.</p>
                        <div className="equipmentList__item-bag-container">
                          <button className="equipmentList__item-bag" onClick={handleBagClick}></button>
                          <div className="equipmentList__item-increament-container">
                            <button className="equipmentList__item-increament">+</button>
                            <div className="equipmentList__item-count">0</div>
                            <button className="equipmentList__item-decrement">-</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </li>
    );
  }
  
  export default Good;