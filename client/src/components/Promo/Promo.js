import MainPic from '../../images/mainpicture.png' //src={MainPic}
import './Promo.css'
import { Link } from 'react-router-dom'

function Promo({}) {
  return (
    /*
    React.useEffect(() => {
      scrollInterval = setTimeout(() => {
        setActive((active + 1) % carouselItems.length);
      }, 5000);*/

      <section className="promo">
        
        <div className="promo__title-container">
          <p className='promo__title'>А</p>
          <p className='promo__title'>И</p>
          <p className='promo__title'>С</p>
          <p className='promo__title'>Т</p>
        </div>
        <h1 className="promo__sub-title">Торговое оборудование и автоматизация в Ставропольском крае</h1>

        <div className="promo__img">
            <div className="promo__btn-container">
            <Link className='promo__btn-link' to="/equipment">
              <button className="promo__btn">Товары</button>
            </Link>
            <Link className='promo__btn-link' to="/services">    
                <button className="promo__btn">Услуги</button>
            </Link>
            </div>
        </div>

      </section>
  );
}

export default Promo;