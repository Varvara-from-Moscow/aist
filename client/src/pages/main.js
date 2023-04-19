import React from 'react'
import Promo from '../components/Promo/Promo'
import SolutionsList from '../components/Solutions/SolutionsList'
import ServicesMain from '../components/ServicesMain/ServicesMain'
import Maintenance from '../components/Maintenance/Maintenance'
import ContactForm from '../components/ContactForm/ContactForm'
import PopularGoods from '../components/PopularGoods/PopularGoods'
import Certificates from '../components/Certificates/Certificates' 
import Slider from '../components/Slider/Slider'

function Main({services, getServicesAfterFilter, savedGoods, handleChangeButton, onButton, popular, complects, handleSaveGood, postBackCall, value, error, errorMessage }) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <Promo/>
            <Slider></Slider>
            <SolutionsList
            complects={complects}
            handleSaveGood={handleSaveGood}
            value={value}
            onButton={onButton}
            handleChangeButton={handleChangeButton}
            savedGoods={savedGoods}
            />
            <ServicesMain
            getServicesAfterFilter={getServicesAfterFilter}
            services={services}
            />
            <Maintenance></Maintenance>
            <ContactForm
            postBackCall={postBackCall}
            errorMessage={errorMessage}
            error={error}
            />
            <PopularGoods
            popular={popular}
            handleSaveGood={handleSaveGood}
            handleChangeButton={handleChangeButton}
            savedGoods={savedGoods}
            />

            <Certificates></Certificates>
        </div>

    );
  }
  
  export default Main;