import React from 'react'
import './Navigation.css'


function EquipmentNavigation({data, handleChoseCategory, equipment}) {

  function getFiterProduct() {
    handleChoseCategory(equipment, data.slug);
  }

  return (
    <li className='equipment-navigation__list'>
      <button className='equipment-navigation__btn' onClick={getFiterProduct}>{data.name}</button>
    </li>
  )
}

export default EquipmentNavigation;