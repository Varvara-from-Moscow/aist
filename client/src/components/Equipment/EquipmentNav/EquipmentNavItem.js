import './EquipmentNav.css'

function EquipmentNavItem({data}) {
    return (
      <li className="equipmentNav__item">{data.name}</li>
    );
  }
  
  export default EquipmentNavItem;
