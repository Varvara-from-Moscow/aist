import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'


function EquipmentNavigation({onClose, data}) {
  return (
    <li className='equipment-navigation__list' onClick={onClose}>
      <Link className='navigation__listlink' to='/`${data.slag}`'>{data.name}</Link>
    </li>
  )
}

export default EquipmentNavigation;