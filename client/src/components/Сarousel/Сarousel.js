import './Carousel.css'
import React from "react"
import MainPic1 from '../../images/mainpicture1.png'
import MainPic2 from '../../images/mainpicture.png'
import { Link } from 'react-router-dom'

function Carousel() {
  const [carouselIndex, setCarouselIndex] = React.useState(1)

  const dataCarousel = [
    {
        image: MainPic1,
        id: 12345,
    },
    {
        image: MainPic2,
        id: 15675,
    },
  ]

  const getNext = () => {
    if(carouselIndex !== dataCarousel.length) {
      setCarouselIndex(carouselIndex + 1)
    } else if (carouselIndex === dataCarousel.length) {
      setCarouselIndex(1)
    }
  }
/*
  const getPrev = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1){
      setSlideIndex(dataCarousel.length)
    }
  }*/

  setTimeout(() => {
    getNext();
  }, "7000");

  return (
      <div className="carousel__container">
        {dataCarousel.map((item, index) => {
          return(

            <div key={item.id} className={carouselIndex === index + 1 ? "carousel carousel_active-anim" : "carousel"}>

              <img className="carousel__img" src={item.image}></img>

              <div className="carousel__btn-container">
                  <Link className='carousel__btn-link' to="/equipment">
                    <button className="carousel__btn">Товары</button>
                  </Link>
                  <Link className='carousel__btn-link' to="/services">    
                    <button className="carousel__btn">Услуги</button>
                  </Link>
              </div>

            </div>
          )
        })}
      </div>
  );
}

export default Carousel;
