import './ServicesList.css'

function ServicestCard({card}) {

    return (
        <li className="servicesList__item">
            <div className="servicesList__item-pic-container">
              <img src={card.image} alt = {card.name} className="servicesList__item-pic"></img>
            </div>
                <div className="servicesList__item-main-container">
                    <div className="servicesList__item-wrapper-star">
                        <h3 className="servicesList__item-title">{card.name}</h3>
                        <div className="servicesList__item-star-container">
                            <div className="servicesList__item-star"></div>
                            <div className="servicesList__item-star"></div>
                            <div className="servicesList__item-star"></div>
                            <div className="servicesList__item-star"></div>
                            <div className="servicesList__item-star"></div>
                    </div>
                </div>

                <div className="servicesList__item-wrapper">      
                    <p className="servicesList__item-price">Цена {card.price} р.</p>
                    <div className="servicesList__item-bag">
                        <div className="servicesList__item-bag-container"></div>
                        <div className="servicesList__item-increament"></div>
                    </div>
                </div>
            </div>
        </li>
    );
}
  export default ServicestCard;