import React from 'react'
import Slider from '../components/Slider/Slider'
import EquipmentList from '../components/Equipment/EquipmentList/EquipmentList'
import EquipmentNav from '../components/Equipment/EquipmentNav/EquipmentNav'
import './equipment.css'
import * as api from '../Api'

function Equipment({isMenuCliked, onCardClick}) {

    const [isMobile, setIsMobile] = React.useState(false)
    const [equipment, setEquipment] = React.useState({})
    const [category, setCategory] = React.useState({})

    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  
    React.useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

    React.useEffect(() => {
      getEquipment()
    }, [])
  
    const getEquipment = () => {
      api.getEquipment({
        })
        .then(res => {
          setEquipment(res)
        })
    }  

    React.useEffect(() => {
      getEquipmentCategory()
    }, [])
  
    const getEquipmentCategory = () => {
      api.getEquipmentCategory()
        .then(res => {
          setCategory(res)
          console.log(res)
        })
    }

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
            <EquipmentList
            data={equipment}
            onCardClick={onCardClick}
            />
            </>
            :
            <>
            <Slider></Slider>
            <h3 className='equipment__title-dop'>Оборудование</h3>
            <div className='equipment__container'>
                <EquipmentNav
                data={category}
                />
                <EquipmentList
                data={equipment}
                onCardClick={onCardClick}
                />
            </div>
            </>
            }
        </>

    );
  }
  
  export default Equipment;