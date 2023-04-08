import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'
import logo from '../../images/logo.png'
import bag from '../../images/bag.png'

function MainNavigation({isOpen, onClose, isbagCliked, total}) {
  return (
    <aside className={`navigation ${isOpen && 'navigation__opened'}`}>
      <div className='navigation__container'>
        <button className='navigation__closebtn' onClick={onClose}></button>
        <ul className='navigation_listcontainer'>
            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink-logo' to="/">
                    <img className='navigation__logo' src={logo} alt='logo'></img>
                </Link>
            </li>

            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/">О компании</Link>
            </li>
            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/equipment">Торговое оборудование</Link>
            </li>
            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/services">Услуги</Link>
            </li>
            <li className='navigation__list' onClick={onClose}>
                <Link className='navigation__listlink' to="/">8(962)440-07-40</Link>
            </li>
            <li className='navigation__list-bag'>
                   <button className='navigation__bagbtn' onClick={isbagCliked}></button>
 
            </li>
        </ul>
      </div>
    </aside>
  )
}

export default MainNavigation;
//                  <div className="navigation__total-count">{total.count}</div>