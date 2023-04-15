import React from 'react'
import * as api from '../Api'
import Slider from '../components/Slider/Slider'
import ServicesList from '../components/Services/ServicesList'
import ServicesNav from '../components/Services/ServicesNav'
import ServisesNavigationList from '../components/Navigation/ServisesNavigationList'
import './services.css'

function Services({isMobile, savedGoods, handleSaveGood, isOpen, onClose, isMenuCliked, handleChangeButton}) {

  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [services, setServices] = React.useState({})
    const [servicesAfterFilter, setServicesAfterFilter] = React.useState({})
    const [category, setCategory] = React.useState({})

    React.useEffect(() => {
      getServices()
    }, [])
  
    const getServices = () => {
      api.getServices({
        })
        .then(res => {
          setServices(res)
          setServicesAfterFilter(res)
        })
    }  

    React.useEffect(() => {
      getServicesCategory()
    }, [])
  
    const getServicesCategory = () => {
      api.getServicesCategory()
        .then(res => {
          setCategory(res)
        })
    }

    function handleChoseCategory(equipment, subCategory) {
      return equipment.filter((item) => item.subcategory === subCategory)
    }

    function getTest(services, subCategory) {
      const result = handleChoseCategory(services, subCategory)
      setServicesAfterFilter(result)
    }

    function getAllServices() {
      setServicesAfterFilter(services)
    }

    return (
      <>
        {isMobile?
          <>
            <div className='services__wrapper'>
                <h3 className='services__title'>Услуги</h3>
                <div className='services__menu'>
                    <p className='services__text'>Все товары</p>
                    <button className='services__menu-btn' onClick={isMenuCliked}></button>
                </div>
            </div>
              <Slider></Slider>
              <ServicesList
              data={servicesAfterFilter}
              handleSaveGood={handleSaveGood}
              handleChangeButton={handleChangeButton}
              savedGoods={savedGoods}
              />
              <ServisesNavigationList
                data={category}
                isOpen={isOpen}
                onClose={onClose}
                handleChoseCategory={getTest}
                services={services}
                getAllServices={getAllServices}
              />
          </>
          :
          <>
              <>
            <Slider></Slider>
            <h3 className='services__title-dop'>Услуги</h3>
            <div className='services__container'>
                <ServicesNav
                data={category}
                handleChoseCategory={getTest}
                services={services}
                getAllServices={getAllServices}
                />
                <ServicesList
                data={servicesAfterFilter}
                handleSaveGood={handleSaveGood}
                handleChangeButton={handleChangeButton}
                savedGoods={savedGoods}
                />
            </div>
            </>
          </>
        }
        </>
    );
  }
  export default Services;
