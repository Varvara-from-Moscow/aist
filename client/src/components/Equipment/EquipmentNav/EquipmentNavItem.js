import './EquipmentNav.css'

function EquipmentNavItem({data, handleChoseCategory, equipment}) {

function getFiterProduct() {
  handleChoseCategory(equipment, data.slug)
}

    return (
      <li className="equipmentNav__item">
        <button className="equipmentNav__btn" onClick={getFiterProduct}>{data.name}</button>
      </li>    
    );
  }
  
  export default EquipmentNavItem;
