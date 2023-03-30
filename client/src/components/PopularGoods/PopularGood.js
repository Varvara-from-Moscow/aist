import './PopularGoods.css'

function PopularGood({popular}) {
    return (
        <li className="popular-goods__container">
            <img src={popular.image} alt={popular.name}className="popular-goods__pic"></img>
                <p className="popular-goods__container-name">{popular.name}</p>
                <p className="popular-goods__container-price">{popular.price} р.</p>
                <div className="popular-goods__container-btn">
                    <button className="popular-goods__button">О товаре</button>
                    <button className="popular-goods__button">В корзину</button>
            </div>
        </li>
    );
  }
  
  export default PopularGood;