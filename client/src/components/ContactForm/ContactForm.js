import Pic from '../../images/contactpic.png'
//import { useForm } from "react-hook-form"
import './ContactForm.css'
import React from 'react'

function ContactForm({postBackCall, error, errorMessage}) {

  const [errorTelMessage, setErrorTelMessage] = React.useState('')
  const [isErrorTel, setIsErrorTel] = React.useState(false)

  const [name, setName] = React.useState('')
  const [tel, setTel] = React.useState('+7')


  /*
        setIsErrorTel(true)
      setErrorTel('Вводите только цифры, без букв и знаков')
  */

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleTelChange(e) {

    if (e.target.value.slice(0,2) === '+7') {
    setTel(e.target.value.replace(/\D$/, '')
    )
    const letter = /\D/g
     if (letter.test(e.nativeEvent.data)) {
        setTel(e.target.value.replace(/.{0,}/, '+7')
      )
      console.log(e.nativeEvent.data)
        setIsErrorTel(true)
        setErrorTelMessage('Вводите только цифры, без букв и знаков')
        setTimeout(function(){
          setErrorTelMessage('');
        }, 2000)
     }
      /*  if (e.target.value === '+7') {
          setIsErrorTel(false)
          setErrorTelMessage('')
        }*/
    }
    else {
      setTel(e.target.value.replace(/.{0,}/, '+7')
      )
    }

    if (tel.length > 12) {
      setIsErrorTel(true)
      setErrorTelMessage('Вы ввели более 12 символов, введите не более 12 символов')
      console.log('Введите числа, без пробелов или буквенных значений')
    } 
  }

  /*
  function handleTelChange(e) {
    setTel("+7" + 
    e.target.value.replace(/\D/g, '')
    );
    console.log(tel)
  }

    function handleTelChange(e) {
    setTel(e.target.value);
  }
              var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
  
  */

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
              minLength="1"
              className="contactForm__input" 
              onChange={handleNameChange}
          /> 
          <span className="contactForm__input-span">Ваш номер телефона</span>
          <input
              required
              name="tel"
              type="tel"
              minLength="12"
              className="contactForm__input"
              value={tel}
              onChange={handleTelChange}
          ></input>
          {error? <span className="contactForm__err-span">{errorMessage}</span>:<span></span>}
          {isErrorTel? <span className="contactForm__err-span">{errorTelMessage}</span>:<span></span>} 
          <button type="submit" className="contactForm__btn">ЗАКАЗАТЬ ЗВОНОК</button>
        </form>
        <img src={Pic} className="contactForm__pic"></img>

      </section>
  );
}

export default ContactForm;