import './Slider.css'
import dataSlider from './DataSlider';
import React from "react"

function Slider() {
  const [slideIndex, setSlideIndex] = React.useState(1)

  const getNext = () => {
    if(slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
      clearTimeout(timer)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
      clearTimeout(timer)
    }
  }

  const getPrev = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
      clearTimeout(timer)
    } else if (slideIndex === 1){
      setSlideIndex(dataSlider.length)
      clearTimeout(timer)
    }
  }

  let timer =

  setTimeout(() => {
    getNext();
  }, "5000");

  return (
      <div className="slider__container">
        {dataSlider.map((item, index) => {
          return(

            <div key={item.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
              <div className="offers__container">
                <div className="offers__text-wrapper">
                  <p className="offers__title">{item.title}</p>
                <div className="offers__text-container">
                  <p className="offers__text">{item.subTitle}</p>
                  <p className="offers__text">{item.text}</p>
                </div>
                </div>  
                <img className="offers__pic" src={item.picture}></img>
              </div>
              
              <div className='slide-container-btn'>
                {Array.from({length: 2}).map((item, index) => (
                  <button onClick={slideIndex === index + 1 ? getNext : getPrev} className={slideIndex === index + 1 ? 'btn-slide btn-slide_active' : 'btn-slide'}></button>
                ))}
              </div>

            </div>
          )
        })}
      </div>
  );
}

export default Slider;