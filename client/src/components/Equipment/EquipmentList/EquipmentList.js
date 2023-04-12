import './EquipmentList.css'
import Good from '../Good/Good'


function EquipmentList({ increment, decrement, savedGoods, onCardClick, data, handleSaveGood, handleChangeButton }) {



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
          handleChangeButton={handleChangeButton}
          savedGoods={savedGoods}
          />
      ))}
    </ul>
    );
  }
  
  export default EquipmentList;