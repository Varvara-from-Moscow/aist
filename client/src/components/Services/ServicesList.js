import './ServicesList.css'
import ServisesCard from './ServisesCard'

function ServicesList({onCardClick, data}) {

    return (
    <ul className="servicesList">
      {data.length > 0 && data.map((card)=> (
        <ServisesCard
          key={card.id}
          card={card}
          onCardClick={onCardClick}
          />
      ))}
    </ul>
    );
  }
  
  export default ServicesList;