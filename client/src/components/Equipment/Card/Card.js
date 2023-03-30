import '../EquipmentList/EquipmentList'

function EquipmentList({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }


    return (
                <li className="equipmentList__item">
                  <img src={card.image} alt = {card.name} onClick={handleClick} className="equipmentList__item-pic"></img>
                  <div className="equipmentList__item-main-container">
                    <div className="equipmentList__item-wrapper-star">
                        <h3 className="equipmentList__item-title">{card.name}</h3>
                        <div className="equipmentList__item-star-container">
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                            <div className="equipmentList__item-star"></div>
                        </div>
                    </div>

                    <div className="equipmentList__item-wrapper">      
                        <p className="equipmentList__item-price">Цена {card.price} р.</p>
                        <div className="equipmentList__item-bag">
                          <div className="equipmentList__item-bag-container"></div>
                          <div className="equipmentList__item-increament"></div>
                        </div>
                    </div>
                  </div>
                </li>
    );
  }
  
  export default EquipmentList;