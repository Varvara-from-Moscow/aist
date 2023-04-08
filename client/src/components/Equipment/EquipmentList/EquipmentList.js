import './EquipmentList.css'
import Good from '../Good/Good'


function EquipmentList({onCardClick, data, handleSaveGood, increment, decrement}) {



    return (
    <ul className="equipmentList">
      {data.length > 0 && data.map((good)=> (
        <Good
          key={good.id}
          good={good}
          onCardClick={onCardClick}
          onSave={handleSaveGood}
          increment={increment}
          decrement={decrement}
          />
      ))}
    </ul>
    );
  }
  
  export default EquipmentList;