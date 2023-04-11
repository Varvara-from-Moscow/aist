import './ServicesList.css'
import ServisesCard from './ServisesCard'

function ServicesList({ savedGoods, onCardClick, data, handleSaveGood, handleChangeButton }) {

    return (
    <ul className="servicesList">
      {data.length > 0 && data.map((card)=> (
        <ServisesCard
          key={card.id}
          card={card}
          onCardClick={onCardClick}
          handleSaveGood={handleSaveGood}
          handleChangeButton={handleChangeButton}
          savedGoods={savedGoods}
          />
      ))}
    </ul>
    );
  }
  
  export default ServicesList;