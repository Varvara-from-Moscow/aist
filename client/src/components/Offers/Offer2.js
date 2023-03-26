import './Offers.css';
import offerPic from '../../images/oferpicture.png';

function Offer2() {
  return (
      <div>
        <div className="offers__container">
            <p className="offers__title">Не нашли нужный товар? </p>
            <div className="offers__text-container">
                <p className="offers__text">Позвоните – мы привезем под заказ.</p>
                <p className="offers__text">Или оставьте заявку на сайте — мы свяжемся с Вами</p>
            </div>
            <img className="offers__pic" src={offerPic}></img>   
        </div>

      </div>
  );
}

export default Offer2;