import Pic from '../../images/contactpic.png'
//import { useForm } from "react-hook-form"
import './ContactForm.css'
import React from 'react'

function ContactForm({postBackCall, error, errorMessage}) {
  const [name, setName] = React.useState('');
  const [tel, setTel] = React.useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleTelChange(e) {
    setTel(e.target.value);
  }  

  function handleSubmit(e) {
    e.preventDefault();
    postBackCall({
        name,
        tel,
    });
  } 


  return (
      <section className="contactForm">
        <form className="contactForm__form" onSubmit={handleSubmit}>
        <h3 className="contactForm__title">У вас остались вопросы? Оставьте заявку и мы свяжемся с вами</h3>
          <span className="contactForm__input-span">Ваше имя</span>
          <input
              required
              name="name"
              type="text"
              minLength="5"
              className="contactForm__input" 
              onChange={handleNameChange}
          /> 
          <span className="contactForm__input-span">Ваш номер телефона</span>
          <input
              required
              name="tel"
              type="tel"
              minLength="5"
              maxLength="30"
              className="contactForm__input"
              onChange={handleTelChange}
          />
          {error? <span className="contactForm__err-span">{errorMessage}</span>:<span></span>} 
          <button type="submit" className="contactForm__btn">ЗАКАЗАТЬ ЗВОНОК</button>
        </form>
        <img src={Pic} className="contactForm__pic"></img>

      </section>
  );
}

export default ContactForm;