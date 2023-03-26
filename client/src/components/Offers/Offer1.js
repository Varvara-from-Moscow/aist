import offerPic from '../../images/oferpic.png';
import './Offers.css';

function Offers1() {
  return (
      <div>
        <div className="offers__container">
            <p className="offers__title">Гарантия лучшей цены</p>
            <div className="offers__text-container">
                <p className="offers__text">Нашли дешевле? Мы снизим цену!</p>
                <p className="offers__text">Оставь заявку на снижение цены в карточке 
                   товара или отправь заявку на консультацию</p>
            </div>
            <img className="offers__pic" src={offerPic}></img>   
        </div>
      </div>
  );
}

export default Offers1;