import './ServicesList.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ServicestCard({ card, handleSaveGood, onCardClick, savedGoods }) {

    let { slug } = useParams();

    function handleAddGood () {
        handleSaveGood(card)
    }

    function handleClick() {
        onCardClick(card);
    }

    //const isButtonChanged = card.is_in_bag === 2
    const isButtonChanged = savedGoods.some(item => item.id === card.id)

    return (
        <li className="servicesList__item">
            <Link to={`/services/${card.slug}`} className="servicesList__item-pic-container">
              <img src={card.image} alt = {card.name} className="servicesList__item-pic"></img>
            </Link>
            <div className="servicesList__item-down-container">
              <div className="servicesList__item-main-container">
                <h3 className="servicesList__item-title">{card.name}</h3>
                <p className="servicesList__item-price">Цена {card.price} р.</p>
              </div>
              {isButtonChanged?
                <button className="servicesList__item-added-in-bag">&#x2714;</button>
              :
                <button className="servicesList__item-add-btn" onClick={handleAddGood}></button>
              }
              
            </div>  
        </li>
    );
}
  export default ServicestCard;

  /**
   * 
   * 
   * 
   * 
   *             <div className="servicesList__item-pic-container">
              <img src={card.image} alt = {card.name} className="servicesList__item-pic"></img>
            </div>
   */