import Promo from '../components/Promo/Promo'
import SolutionsList from '../components/Solutions/SolutionsList'
import ServicesMain from '../components/ServicesMain/ServicesMain'
import Maintenance from '../components/Maintenance/Maintenance'
import ContactForm from '../components/ContactForm/ContactForm'
import PopularGoods from '../components/PopularGoods/PopularGoods'
import Certificates from '../components/Certificates/Certificates' 
import Slider from '../components/Slider/Slider'

function Main({popular, complects, handleSaveGood}) {
    return (
        <div>
            <Promo/>
            <Slider></Slider>
            <SolutionsList
            complects={complects}
            handleSaveGood={handleSaveGood}
            />
            <ServicesMain></ServicesMain>
            <Maintenance></Maintenance>
            <ContactForm></ContactForm>
            <PopularGoods
            popular={popular}
            handleSaveGood={handleSaveGood}
            />

            <Certificates></Certificates>
        </div>

    );
  }
  
  export default Main;