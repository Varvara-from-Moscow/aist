import Promo from '../components/Promo/Promo'
import Solutions from '../components/Solutions/Solutions'
import Services from '../components/Services/Services'
import Maintenance from '../components/Maintenance/Maintenance'
import ContactForm from '../components/ContactForm/ContactForm'
import PopularGoods from '../components/PopularGoods/PopularGoods'
import Certificates from '../components/Certificates/Certificates' 
import Slider from '../components/Slider/Slider'

function Main() {
    return (
        <div>
            
            <Promo></Promo>
            <Slider></Slider>
            <Solutions></Solutions>
            <Services></Services>
            <Maintenance></Maintenance>
            <ContactForm></ContactForm>
            <PopularGoods></PopularGoods>
            <Certificates></Certificates>
        </div>

    );
  }
  
  export default Main;