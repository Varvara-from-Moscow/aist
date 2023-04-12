import ContactForm from '../components/ContactForm/ContactForm'
import './individualPageOfEquipment.css'
import React from 'react'
import * as api from '../Api'
import { useParams, useNavigate } from 'react-router-dom'

function IndividualPageOfEquipment({ savedGoods, handleChangeButton, handleSaveGood, allProducts, postBackCall, error, errorMessage }) {

  const navigate = useNavigate()
  function goBack() {
    navigate(-1);
}
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

      //const isButtonChanged = good.is_in_bag === 2
      const isButtonChanged = savedGoods.some(item => item.id === good.id)

    function handleAddGood () {
        handleSaveGood(good)
        handleChangeButton(good)
    }

    return (
        <>
            <div className='individualPageOfEquipment-main-wrapper'>
              <div className='individualPageOfEquipment-back-container'>
                <button className='individualPageOfEquipment-back-btn' onClick={goBack}>⟵ Назад</button>
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
                    {isButtonChanged ?
                      <button className='individualPageOfEquipment-btn'>Добавлено</button>
                      :
                      <button className='individualPageOfEquipment-btn' onClick={handleAddGood}>В корзину</button>  
                    }    
                        <button className='individualPageOfEquipment-btn'>Остались вопросы?</button>
                    </div>
                </div>
              </div>
              
            </div>  
            <ContactForm
            postBackCall={postBackCall}
            error={error} 
            errorMessage={errorMessage}
            />
        </>

    );
  }
  
  export default IndividualPageOfEquipment;
