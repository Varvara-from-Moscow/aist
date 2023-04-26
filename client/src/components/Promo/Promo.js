import MainPic from '../../images/mainpicture.png' //src={MainPic}
import './Promo.css'
import { Link } from 'react-router-dom'
import Carousel from '../Сarousel/Сarousel'

function Promo({}) {
  return (
    /*
    React.useEffect(() => {
      scrollInterval = setTimeout(() => {
        setActive((active + 1) % carouselItems.length);
      }, 5000);*/

      /*
        <div className="promo__title-container">
          <p className='promo__title'>А</p>
          <p className='promo__title'>И</p>
          <p className='promo__title'>С</p>
          <p className='promo__title'>Т</p>
        </div>
      font-style: normal;
font-weight: 400;
font-size: 70px;
line-height: 82px;
      */

      <section className="promo">
        <h1 className='promo__title'>АИСТ</h1>
        <h3 className='promo__title-sub'>Автоматизация.Информационные Системы.Технологии.</h3>
        <h2 className="promo__sub-title">Торговое оборудование и автоматизация в Ставропольском крае</h2>

        <Carousel></Carousel>

      </section>
  );
}

export default Promo;