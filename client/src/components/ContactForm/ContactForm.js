import Pic from '../../images/contactpic.png'
import './ContactForm.css'
import React from 'react'

function ContactForm({showLoading, postBackCall, error, errorMessage}) {

  const [errorTelMessage, setErrorTelMessage] = React.useState('')
  const [isErrorTel, setIsErrorTel] = React.useState(false)

  const [errorNameMessage, setErrorNameMessage] = React.useState('')
  const [isErrorName, setIsErrorName] = React.useState(false)

  const [name, setName] = React.useState('')
  const [tel, setTel] = React.useState('+7')

  //const [isInputDisabled, setIsInputDisabled] = React.useState(true)
  const [isFormValid, setIsFormValid] = React.useState(false)
/*
  const handleInputDisabled = () => {
    setIsInputDisabled(!isInputDisabled)
  }*/


    React.useEffect(() => {
      handleValideCheck()
    },[name, tel])

    function handleValideCheck() {
      if ((tel.length === 12) && (name.length > 0) && (isErrorName  === false) && (isErrorTel === false)) {
        setIsFormValid(true)
        console.log(isErrorTel, isErrorName, 'valid')
      } else {
        setIsFormValid(false)
        console.log(isErrorTel, isErrorName)
      }
    }  

  function handleNameChange(e) {
    setIsErrorName(false)
    if (e.target.value.length < 2) {
      setIsErrorName(true)
      setErrorNameMessage('Введите ваше имя')
      setTimeout(function(){
        setErrorNameMessage('');
      }, 2000)
    } else {
      setIsErrorName(false)
      setErrorNameMessage('')
    }
    setName(e.target.value)
  }

  function handleTelChange(e) {
    setIsErrorTel(false)
    if (e.target.value.slice(0,2) === '+7') {
    setTel(e.target.value.replace(/\D$/, ''))
    const letter = /\D/
      if (letter.test(e.nativeEvent.data) && e.nativeEvent.data) {
        setTel(e.target.value.replace(/.{0,}/, '+7'))
        //console.log(e.nativeEvent.data)
        setIsErrorTel(true)
        setErrorTelMessage('Вводите только цифры, без букв и знаков')
        setTimeout(function(){
          setErrorTelMessage('');
        }, 2000)
     }
     
    } else {
      setTel(e.target.value.replace(/.{0,}/, '+7'))
    } 

    if (tel.length > 11 && e.nativeEvent.data) {
      setIsErrorTel(true)
      setErrorTelMessage('Вы ввели более 12 символов, введите не более 12 символов')
      console.log('Введите числа, без пробелов или буквенных значений')
    } 
  }

  function handleSubmit(e) {
    e.preventDefault();
    postBackCall({
        name,
        tel,
    });
    setTel("+7")
    handleValideCheck()
    //handleInputDisabled();
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
              //disabled={!isInputDisabled}
          /> 
          {isErrorName? <span className="contactForm__err-span">{errorNameMessage}</span>:<span></span>}

          <span className="contactForm__input-span">Ваш номер телефона</span>
          <input
              required
              name="tel"
              type="tel"
              minLength="12"
              className="contactForm__input"
              value={tel}
              onChange={handleTelChange}
              //disabled={!isInputDisabled}
          ></input>
          {error? <span className="contactForm__err-span">{errorMessage}</span>:<span></span>}
          {isErrorTel? <span className="contactForm__err-span">{errorTelMessage}</span>:<span></span>} 
           
          <button 
            type="submit" 
            disabled={!isFormValid}
            //onClick={handleInputDisabled} 
            className={`contactForm__btn ${isFormValid && 'contactForm__btn_active'}`}>
            {showLoading ? 'Заявка отправляется...' : 'ЗАКАЗАТЬ ЗВОНОК'}
          </button>
        
        </form>
        <img src={Pic} className="contactForm__pic"></img>

      </section>
  );
}

export default ContactForm;