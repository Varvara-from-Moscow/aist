import './EquipmentList.css'
import Card from '../Card/Card'


function EquipmentList({onCardClick, data}) {

    return (
    <ul className="equipmentList">
      {data.length > 0 && data.map((card)=> (
        <Card
          key={card.id}
          card={card}
          onCardClick={onCardClick}
          />
      ))}
    </ul>
    );
  }
  
  export default EquipmentList;