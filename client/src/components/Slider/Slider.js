import './Slider.css'
import Offer1 from '../Offers/Offer1' 
import Offer2 from '../Offers/Offer2'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import React from "react"

function Slider() {
/*
  const obj = [
    {
      offer:"Гарантия лучшей цены",
      question:"Нашли дешевле? Мы снизим цену!",
      indication:"Оставь заявку на снижение цены в карточке товара или отправь заявку на консультацию"
    },
    {
      offer:"Не нашли нужный товар?",
      question:"Позвоните – мы привезем под заказ.",
      indication:"Или оставьте заявку на сайте — мы свяжемся с Вами"
    },
  ]

  const slide = React.useRef(null)
  const [prev, setPrev] = React.useState(false)
  const [next, setNext] = React.useState(false)

  setTimeout(() => {
    ;
  }, 5000);

  let position = 0

  function getNext() {
    if (position === 0) {
        setPrev(true)
    } else {
      position += 1000
      setPrev(false)
      slide.current.childNodes.forEach((item) => {
        item.style = `transform: translateX(${position})px`
      })  
    }
  }

  function getPrev() {
    slide.current.childNodes.forEach((item) => {
      item.style = "transform: translateX(-1000px)"
  })
  }*/


  return (
      <div className="slider__container">
        <div className="slider">
          <div className="slider__item">
          <Offer1></Offer1>

          </div>
        </div>

      </div>
  );
}

export default Slider;
/*   ref={slide}
<button onClick={getNext}>next</button>
<button onClick={getPrev}>prev</button>*/
//