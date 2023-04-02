import React from 'react'
import './Navigation.css'
import EquipmentNavigationItem from './EquipmentNavigationItem'


function EquipmentNavigationList({isOpen, onClose, data, handleChoseCategory, equipment, getAllEquipment}) {

  function handleGetAllEquipment() {
    getAllEquipment()
}

  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='equipment-navigation__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='equipment-navigation_listcontainer'>
          <li className='equipment-navigation__list'>
            <button className='equipment-navigation__btn' onClick={handleGetAllEquipment}>Все товары</button>
          </li>
          {data.length > 0 && data.map((card)=> (
            <EquipmentNavigationItem
              key={card.id}
              data={card}
              handleChoseCategory={handleChoseCategory}
              equipment={equipment}
            />
      ))}

        </ul>
      </div>
    </aside>
  )
}

export default EquipmentNavigationList;