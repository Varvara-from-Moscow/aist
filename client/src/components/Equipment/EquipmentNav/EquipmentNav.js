import './EquipmentNav.css'
import EquipmentNavItem from './EquipmentNavItem'

function EquipmentNav({data, handleChoseCategory, equipment, getAllEquipment}) {

    function handleGetAllEquipment() {
        getAllEquipment()
    }

    return (
            <ul className="equipmentNav">
                <li className="equipmentNav__item">
                    <button className="equipmentNav__btn" onClick={handleGetAllEquipment}>Все товары</button>
                </li>
              {data.length > 0 && data.map((data)=> (
                <EquipmentNavItem
                   key={data.id}
                   data={data}
                   handleChoseCategory={handleChoseCategory}
                   equipment={equipment}
                />
              ))}
            </ul>
    );
  }
  
  export default EquipmentNav;