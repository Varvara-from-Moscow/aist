import React from 'react'
import './Navigation.css'
import ServicesNavigationItem from './ServisesNavigationItem'


function ServisesNavigationList({isOpen, onClose, data, handleChoseCategory, services, getAllServices}) {

  function handleGetAllServices() {
    getAllServices()
}

  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='equipment-navigation__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='equipment-navigation_listcontainer'>
          <li className='equipment-navigation__list'>
            <button className='equipment-navigation__btn' onClick={handleGetAllServices}>Все услуги</button>
          </li>
          {data.length > 0 && data.map((card)=> (
            <ServicesNavigationItem
              key={card.id}
              data={card}
              handleChoseCategory={handleChoseCategory}
              services={services}
            />
      ))}

        </ul>
      </div>
    </aside>
  )
}

export default ServisesNavigationList;
