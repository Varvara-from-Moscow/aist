import ContactForm from '../components/ContactForm/ContactForm'
import './individualPageOfEquipment.css'
import React from 'react'
import * as api from '../Api'
import { useParams, useNavigate } from 'react-router-dom'
//
function IndividualPageOfEquipment({ savedGoods, allProducts, handleChangeButton, handleSaveGood, postBackCall, error, errorMessage }) {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  function goBack() {
    navigate(-1);
}

  let { slug } = useParams();
  const good = allProducts.find(f => f.slug === slug)

  const isButtonChanged = savedGoods.some(item => item.id === good.id)

  function handleAddGood () {
    handleSaveGood(good)
  }

  let price = (new Intl.NumberFormat('ru-RU').format(good.price));

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
                    <p className='individualPageOfEquipment-price'>{price} р.</p>
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
