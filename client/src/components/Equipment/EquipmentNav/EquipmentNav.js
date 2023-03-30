import './EquipmentNav.css'
import EquipmentNavItem from './EquipmentNavItem'

function EquipmentNav({data}) {
    return (
            <ul className="equipmentNav">
                <li className="equipmentNav__item">Все товары</li>
              {data.length > 0 && data.map((data)=> (
                <EquipmentNavItem
                   key={data.id}
                   data={data}
                />
              ))}
            </ul>
    );
  }
  
  export default EquipmentNav;