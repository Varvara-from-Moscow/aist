import logo from '../../images/logo.png'
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Header({isBurgerMenuCliked}) {

  const [isMobile, setIsMobile] = React.useState(false)

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  return (
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        {isMobile?
        <p className='header__burger' onClick={isBurgerMenuCliked}></p>:
        <ul className="header__nav-wrapper">
          <li className="header__nav">О компании</li>
          <li className="header__nav">Торговое оборудование</li>
          <li className="header__nav">Услуги</li>
          <li className="header__nav">Корзина</li>
          <li className="header__nav">8(962)440-07-40</li>
        </ul>
        }
      </header>
  );
}

export default Header;