import './EquipmentList.css'
import Good from '../Good/Good'


function EquipmentList({onCardClick, data, handleSaveGood}) {



    return (
    <ul className="equipmentList">
      {data.length > 0 && data.map((good)=> (
        <Good
          key={good.id}
          good={good}
          onCardClick={onCardClick}
          onSave={handleSaveGood}
          />
      ))}
    </ul>
    );
  }
  
  export default EquipmentList;