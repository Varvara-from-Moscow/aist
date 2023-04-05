import MainPic from '../../images/mainpicture.png' //src={MainPic}
import './ServicesMain.css'
import React from 'react'
import { Link } from 'react-router-dom'

function ServicesMain() {
  return (
      <section className="servicesMain">
        <h2 className="servicesMain__title">Услуги</h2>
        <ul className="servicesMain__wrapper">
            <li className="servicesMain__container">
                <div className="servicesMain__container-pic servicesMain__container-pic-cz"></div>
                <div className="servicesMain__container-wrapper">
                  <h3 className="servicesMain__container-title">Честный знак</h3>
                  <p className="servicesMain__container-text">
                    Изготовление ЭЦП, регистрация в системе, настройка учета, интеграция 
                    с системой, ведение учета, проведение инвентаризации, корректировка остатков, 
                    интеграция с товароучетными системами.
                  </p>
                  <Link to="/services">
                    <button className="servicesMain__container-btn">Подробнее</button>
                  </Link>
                </div>
            </li>
            <li className="servicesMain__container">
                <div className="servicesMain__container-pic servicesMain__container-pic-egaist"></div>
                <div className="servicesMain__container-wrapper">
                  <h3 className="servicesMain__container-title">ЕГАИС</h3>
                  <p className="servicesMain__container-text">
                    Изготовление ЭЦП (Электронная цифровая подпись), регистрация в системе, настройка учета, 
                    ведение учета, проведение инвентаризации, корректировка остатков.
                  </p>
                  <Link to="/services">
                    <button className="servicesMain__container-btn">Подробнее</button>
                  </Link>
                </div>
            </li>
            <li className="servicesMain__container">
                <div className="servicesMain__container-pic servicesMain__container-pic-1c"></div>
                <div className="servicesMain__container-wrapper">
                  <h3 className="servicesMain__container-title">1С</h3>
                  <p className="servicesMain__container-text">
                    Поставка, установка, настройка, доработка, сопровождение программ компании 1С.
                  </p>
                  <Link to="/services">
                    <button className="servicesMain__container-btn">Подробнее</button>
                  </Link>  
                </div>
            </li>
            <li className="servicesMain__container">
                <div className="servicesMain__container-pic servicesMain__container-pic-ofd"></div>
                <div className="servicesMain__container-wrapper">
                  <h3 className="servicesMain__container-title">OFD.RU</h3>
                  <p className="servicesMain__container-text">
                    Подключение, продление
                  </p>
                  <Link to="/services">
                    <button className="servicesMain__container-btn">Подробнее</button>
                  </Link>
                </div>  
            </li>
            <li className="servicesMain__container">
                <div className="servicesMain__container-pic servicesMain__container-pic-ezp"></div>
                <div className="servicesMain__container-wrapper">
                <h3 className="servicesMain__container-title">ЭЦП</h3>
                  <p className="servicesMain__container-text">
                    Получение ЭЦП (Электронная цифровая подпись) физическим и юридическим лицам для Торгов 
                    (Различные торговые площадки).
                  </p>
                  <Link to="/services">
                    <button className="servicesMain__container-btn">Подробнее</button>
                  </Link>
                </div>  
            </li>
            <li className="servicesMain__container">
                <div className="servicesMain__container-pic servicesMain__container-pic-mercuriy"></div>
                <div className="servicesMain__container-wrapper">
                  <h3 className="servicesMain__container-title">ФГИС Меркурий</h3>
                  <p className="servicesMain__container-text">
                    Регистрация в системе, ведение учета.
                  </p>
                  <Link to="/services" >
                    <button className='servicesMain__container-btn'>Подробнее</button>  
                  </Link>
                </div>
            </li>
        </ul>

      </section>
  );
}

export default ServicesMain;

//className="servicesMain__container-btn"