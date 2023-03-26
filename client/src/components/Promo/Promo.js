import MainPic from '../../images/mainpicture.png' //src={MainPic}
import './Promo.css'

function Promo() {
  return (
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
                <button className="promo__btn">Товары</button>
                <button className="promo__btn">Услуги</button>
            </div>
        </div>

      </section>
  );
}

export default Promo;