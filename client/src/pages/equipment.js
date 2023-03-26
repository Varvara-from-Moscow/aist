import React from 'react'
import Slider from '../components/Slider/Slider'
import EquipmentList from '../components/EquipmentList/EquipmentList'
import EquipmentNav from '../components/EquipmentNav/EquipmentNav'
import './equipment.css'

function Equipment({isMenuCliked}) {

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
        <>
            {isMobile?
            <>
            <div className='equipment__wrapper'>
                <h3 className='equipment__title'>Оборудование</h3>
                <div className='quipment__menu'>
                    <p className='quipment__text'>Все товары</p>
                    <button className='equipment__menu-btn' onClick={isMenuCliked}></button>
                </div>
            </div>
            <Slider></Slider>
            <EquipmentList></EquipmentList>
            </>
            :
            <>
            <Slider></Slider>
            <h3 className='equipment__title-dop'>Оборудование</h3>
            <div className='equipment__container'>
                <EquipmentNav></EquipmentNav>
                <EquipmentList></EquipmentList> 
            </div>
            </>
            }
        </>

    );
  }
  
  export default Equipment;
  //<EquipmentList></EquipmentList> 
  //