import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'
import EquipmentNavigationItem from './EquipmentNavigationItem'
import * as api from '../../Api'


function EquipmentNavigationList({isOpen, onClose}) {

  const [category, setCategory] = React.useState({})

  React.useEffect(() => {
    getEquipmentCategory()
  }, [])

  const getEquipmentCategory = () => {
    api.getEquipmentCategory()
      .then(res => {
        setCategory(res)
      })
  }

  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='equipment-navigation__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='equipment-navigation_listcontainer'>
          <li className='equipment-navigation__list' onClick={onClose}>
            <Link className='navigation__listlink' to='/`${data.slag}`'>Все товары</Link>
          </li>
          {category.length > 0 && category.map((card)=> (
            <EquipmentNavigationItem
              key={card.id}
              data={card}
            />
      ))}

        </ul>
      </div>
    </aside>
  )
}

export default EquipmentNavigationList;