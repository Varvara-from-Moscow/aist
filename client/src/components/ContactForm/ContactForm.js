import Pic from '../../images/contactpic.png';
import './ContactForm.css';

function ContactForm() {
  return (
      <section className="contactForm">
        <form className="contactForm__form">
        <h3 className="contactForm__title">У вас остались вопросы? Оставьте заявку и мы свяжемся с вами</h3>
          <span className="contactForm__input-span">Ваше имя</span>
          <input
              required
              name="email"
              type="email"
              minLength="5"
              className="contactForm__input" 
             /*onChange={handleChange}*/
          /> 
          <span className="contactForm__input-span">Ваш номер телефона</span>
          <input
              required
              name="number"
              type="number"
              minLength="5"
              maxLength="5"
              className="contactForm__input"
            /*onChange={handleChange}*/
          />
           
          <button type="submit" className="contactForm__btn">ЗАКАЗАТЬ ЗВОНОК</button>
        </form>
        <img src={Pic} className="contactForm__pic"></img>

      </section>
  );
}

export default ContactForm;