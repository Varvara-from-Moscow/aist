import React from 'react'
import Slider from '../components/Slider/Slider'
import EquipmentList from '../components/Equipment/EquipmentList/EquipmentList'
import EquipmentNav from '../components/Equipment/EquipmentNav/EquipmentNav'
import EquipmentNavigationList from '../components/Navigation/EquipmentNavigationList'
import './equipment.css'
import * as api from '../Api'

function Equipment({handleChangeButton, isMenuCliked, onCardClick, handleSaveGood, isOpen, onClose, decrement, increment}) {

    const [isMobile, setIsMobile] = React.useState(false)
    const [equipment, setEquipment] = React.useState({})
    const [equipmentAfterFilter, setEquipmentAfterFilter] = React.useState({})
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
          setEquipmentAfterFilter(res)
        })
    }  

    React.useEffect(() => {
      getEquipmentCategory()
    }, [])
  
    const getEquipmentCategory = () => {
      api.getEquipmentCategory()
        .then(res => {
          setCategory(res)
        })
    }

    function handleChoseCategory(equipment, subCategory) {
      return equipment.filter((item) => item.subcategory === subCategory)
    }

    function getTest(equipment, subCategory) {
      const result = handleChoseCategory(equipment, subCategory)
      setEquipmentAfterFilter(result)
    }

    function getAllEquipment() {
      setEquipmentAfterFilter(equipment)
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
            data={equipmentAfterFilter}
            onCardClick={onCardClick}
            handleSaveGood={handleSaveGood}
            increment={increment}
            decrement={decrement}
            handleChangeButton={handleChangeButton}
            />
            <EquipmentNavigationList
              isOpen={isOpen}
              onClose={onClose}
              handleChoseCategory={getTest}
              data={category}
              equipment={equipment}
              getAllEquipment={getAllEquipment}
              
            />
            </>
            :
            <>
            <Slider></Slider>
            <h3 className='equipment__title-dop'>Оборудование</h3>
            <div className='equipment__container'>
                <EquipmentNav
                handleChoseCategory={getTest}
                data={category}
                equipment={equipment}
                getAllEquipment={getAllEquipment}
                />
                <EquipmentList
                data={equipmentAfterFilter}
                onCardClick={onCardClick}
                handleSaveGood={handleSaveGood}
                increment={increment}
                decrement={decrement}
                handleChangeButton={handleChangeButton}
                />
            </div>
            </>
            }
        </>

    );
  }
  
  export default Equipment;