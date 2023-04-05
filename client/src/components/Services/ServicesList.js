import './ServicesList.css'
import ServisesCard from './ServisesCard'

function ServicesList({onCardClick, data, handleSaveGood}) {

    return (
    <ul className="servicesList">
      {data.length > 0 && data.map((card)=> (
        <ServisesCard
          key={card.id}
          card={card}
          onCardClick={onCardClick}
          handleSaveGood={handleSaveGood}
          />
      ))}
    </ul>
    );
  }
  
  export default ServicesList;