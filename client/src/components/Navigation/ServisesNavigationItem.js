import React from 'react'
import './Navigation.css'


function ServisesNavigationItem({data, handleChoseCategory, services}) {

  function getFiterProduct() {
    handleChoseCategory(services, data.slug);
  }

  return (
    <li className='equipment-navigation__list'>
      <button className='equipment-navigation__btn' onClick={getFiterProduct}>{data.name}</button>
    </li>
  )
}

export default ServisesNavigationItem;