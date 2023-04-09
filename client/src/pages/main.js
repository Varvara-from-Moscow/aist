import Promo from '../components/Promo/Promo'
import SolutionsList from '../components/Solutions/SolutionsList'
import ServicesMain from '../components/ServicesMain/ServicesMain'
import Maintenance from '../components/Maintenance/Maintenance'
import ContactForm from '../components/ContactForm/ContactForm'
import PopularGoods from '../components/PopularGoods/PopularGoods'
import Certificates from '../components/Certificates/Certificates' 
import Slider from '../components/Slider/Slider'

function Main({popular, complects, handleSaveGood, postBackCall,isAdded}) {
    return (
        <div>
            <Promo/>
            <Slider></Slider>
            <SolutionsList
            complects={complects}
            handleSaveGood={handleSaveGood}
            isAdded={isAdded}
            />
            <ServicesMain></ServicesMain>
            <Maintenance></Maintenance>
            <ContactForm
            postBackCall={postBackCall}
            />
            <PopularGoods
            popular={popular}
            handleSaveGood={handleSaveGood}
            />

            <Certificates></Certificates>
        </div>

    );
  }
  
  export default Main;