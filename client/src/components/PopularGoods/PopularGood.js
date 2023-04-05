import './PopularGoods.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function PopularGood({popular, onGood}) {

let { slug } = useParams();

function handleAddGood() {
    onGood(popular)
}

    return (
        <li className="popular-goods__container">
            <div className="popular-goods__pic-container">
              <img src={popular.image} alt={popular.name}className="popular-goods__pic"></img>
            </div>
                <p className="popular-goods__container-name">{popular.name}</p>
                <p className="popular-goods__container-price">{popular.price} р.</p>
              <div className="popular-goods__container-btn">
                <Link to={`/equipment/${popular.slug}`} className="popular-goods__link">
                  <p className="popular-goods__link-text">О товаре</p>
                </Link>
                  <button className="popular-goods__button" onClick={handleAddGood}>В корзину</button>
              </div>
        </li>
    );
  }
  
  export default PopularGood;