import ContactForm from '../components/ContactForm/ContactForm'
import './individualPageOfEquipment.css'
import React from 'react'
import * as api from '../Api'
import { useParams } from 'react-router-dom';

function IndividualPageOfEquipment({ handleSaveGood, allProducts, postBackCall }) {
/*
    const [allProducts, setAllProducts] = React.useState({})

    React.useEffect(() => {
        getAllProducts()
      }, [])
    
      const getAllProducts = () => {
        api.getAllProducts()
          .then(res => {
            setAllProducts(res)
          })
      }*/

      let { slug } = useParams();
      const good = allProducts.find(f => f.slug === slug)

    function handleAddGood () {
        handleSaveGood(good)
    }

    return (
        <>
            <div className='individualPageOfEquipment-main-wrapper'>
              <div className='individualPageOfEquipment-back-container'>
                <p className='individualPageOfEquipment-back-btn'>Назад</p>
                <div className='individualPageOfEquipment-close-btn'></div>
              </div>
              <div className='individualPageOfEquipment-image-and-description-wrapper'>
                <div className='individualPageOfEquipment-img-wrapper'>
                  <img className='individualPageOfEquipment-img' src={good.image} alt={good.name}></img>
                </div>

                <div className='individualPageOfEquipment-description-container'>
                    <p className='individualPageOfEquipment-name'>{good.name}</p>
                    <p className='individualPageOfEquipment-description'>{good.description}</p>
                    <p className='individualPageOfEquipment-price'>{good.price} р.</p>
                    <div className='individualPageOfEquipment-btn-container'>
                        <button className='individualPageOfEquipment-btn' onClick={handleAddGood}>В корзину</button>
                        <button className='individualPageOfEquipment-btn'>Остались вопросы?</button>
                    </div>
                </div>
              </div>
              
            </div>  
            <ContactForm
            postBackCall={postBackCall}
            />
        </>

    );
  }
  
  export default IndividualPageOfEquipment;
