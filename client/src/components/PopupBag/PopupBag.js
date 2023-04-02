import React from 'react'
//import { Link } from 'react-router-dom';
import './PopupBag.css'
import Good from './Good/Good'


function PopupBag({isOpen, onClose, savedGoods, handleDelete}) {
  

  return (
    <aside className={`bag-popup ${isOpen && 'bag-popup_opened'}`}>
    <div className="bag-popup__container">
      <button className="bag-popup__closebtn" type="button" onClick={onClose}></button>
      <h3 className="bag-popup__title">Ваш заказ</h3>
      <ul className="bag-popup__goods-list">
        {savedGoods.length > 0 && savedGoods.map((good)=> (
          <Good
            key={good.id}
            good={good}
            handleDelete={handleDelete}
            /*onCardClick={onCardClick}*/
          />
        ))}  
      </ul>
      <p>Сумма:{}</p>
      <form>
        <span className="bag-popup__input-span">Имя</span>
        <input className="bag-popup__input"></input>
        <span className="bag-popup__input-span">Телефон</span>
        <input className="bag-popup__input"></input>
        <span className="bag-popup__input-span">Email</span>
        <input className="bag-popup__input"></input>
        <span className="bag-popup__input-span">Промокод (При наличии)</span>
        <input className="bag-popup__input"></input>
        <span>Сумма: {} р.</span>
        <span>Итоговая сумма: {} р.</span>
      <button type="submit" className="bag-popup__button">Заказать</button>
      </form>
    </div>
  </aside>
  )
}

export default PopupBag;

/*
const data = [
    {
        "id": 4,
        "name": "Касса",
        "slug": "kassa",
        "description": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
        "features": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
        "price": "2000.00",
        "available": true,
        "stock": 1,
        "created_at": "2023-02-06T20:01:33.895000",
        "updated_at": "2023-03-26T11:06:11.622812",
        "image": "http://127.0.0.1:8000/media/images/kassa.jpg",
        "rating": "0.0",
        "stars": 0,
        "is_popular": true,
        "category": 4,
        "subcategory": 1
    },
    {
        "id": 2,
        "name": "Маркировка товаров \"под ключ\"",
        "slug": "way",
        "description": "Маркировка товаров под ключ — готовое решение для работы с маркировкой. Подбор оборудования и ПО осуществляется индивидуально с учетом специфики бизнеса (аудит проводится бесплатно). Сотрудничество не ограничивается только поставкой —",
        "features": "Хотите избежать штрафов по маркировке?\r\nВнедрим решение под ключ за 7 дней\r\nНа 30% выгоднее засчёт удалённых работ!",
        "price": "20000.00",
        "available": true,
        "stock": 999,
        "created_at": "2023-01-20T21:13:45.279000",
        "updated_at": "2023-02-08T00:05:29.785855",
        "image": "http://127.0.0.1:8000/media/images/way.png",
        "rating": null,
        "stars": null,
        "is_popular": false,
        "category": 5,
        "subcategory": null
    },
    {
      "id": 1,
      "name": "Касса",
      "slug": "kassa",
      "description": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
      "features": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
      "price": "2000.00",
      "available": true,
      "stock": 1,
      "created_at": "2023-02-06T20:01:33.895000",
      "updated_at": "2023-03-26T11:06:11.622812",
      "image": "http://127.0.0.1:8000/media/images/kassa.jpg",
      "rating": "0.0",
      "stars": 0,
      "is_popular": true,
      "category": 4,
      "subcategory": 1
  },
  {
      "id": 5,
      "name": "Маркировка товаров \"под ключ\"",
      "slug": "way",
      "description": "Маркировка товаров под ключ — готовое решение для работы с маркировкой. Подбор оборудования и ПО осуществляется индивидуально с учетом специфики бизнеса (аудит проводится бесплатно). Сотрудничество не ограничивается только поставкой —",
      "features": "Хотите избежать штрафов по маркировке?\r\nВнедрим решение под ключ за 7 дней\r\nНа 30% выгоднее засчёт удалённых работ!",
      "price": "20000.00",
      "available": true,
      "stock": 999,
      "created_at": "2023-01-20T21:13:45.279000",
      "updated_at": "2023-02-08T00:05:29.785855",
      "image": "http://127.0.0.1:8000/media/images/way.png",
      "rating": null,
      "stars": null,
      "is_popular": false,
      "category": 5,
      "subcategory": null
  },
  {
    "id": 14,
    "name": "Касса",
    "slug": "kassa",
    "description": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
    "features": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
    "price": "2000.00",
    "available": true,
    "stock": 1,
    "created_at": "2023-02-06T20:01:33.895000",
    "updated_at": "2023-03-26T11:06:11.622812",
    "image": "http://127.0.0.1:8000/media/images/kassa.jpg",
    "rating": "0.0",
    "stars": 0,
    "is_popular": true,
    "category": 4,
    "subcategory": 1
},
{
    "id": 12,
    "name": "Маркировка товаров \"под ключ\"",
    "slug": "way",
    "description": "Маркировка товаров под ключ — готовое решение для работы с маркировкой. Подбор оборудования и ПО осуществляется индивидуально с учетом специфики бизнеса (аудит проводится бесплатно). Сотрудничество не ограничивается только поставкой —",
    "features": "Хотите избежать штрафов по маркировке?\r\nВнедрим решение под ключ за 7 дней\r\nНа 30% выгоднее засчёт удалённых работ!",
    "price": "20000.00",
    "available": true,
    "stock": 999,
    "created_at": "2023-01-20T21:13:45.279000",
    "updated_at": "2023-02-08T00:05:29.785855",
    "image": "http://127.0.0.1:8000/media/images/way.png",
    "rating": null,
    "stars": null,
    "is_popular": false,
    "category": 5,
    "subcategory": null
},
{
  "id": 141,
  "name": "Касса",
  "slug": "kassa",
  "description": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
  "features": "Банковские терминалы для принятия безналичных платежей ingenico. Функциональное компактное устройство (мобильный или стационарный пин-пад).",
  "price": "2000.00",
  "available": true,
  "stock": 1,
  "created_at": "2023-02-06T20:01:33.895000",
  "updated_at": "2023-03-26T11:06:11.622812",
  "image": "http://127.0.0.1:8000/media/images/kassa.jpg",
  "rating": "0.0",
  "stars": 0,
  "is_popular": true,
  "category": 4,
  "subcategory": 1
},
{
  "id": 121,
  "name": "Маркировка товаров \"под ключ\"",
  "slug": "way",
  "description": "Маркировка товаров под ключ — готовое решение для работы с маркировкой. Подбор оборудования и ПО осуществляется индивидуально с учетом специфики бизнеса (аудит проводится бесплатно). Сотрудничество не ограничивается только поставкой —",
  "features": "Хотите избежать штрафов по маркировке?\r\nВнедрим решение под ключ за 7 дней\r\nНа 30% выгоднее засчёт удалённых работ!",
  "price": "20000.00",
  "available": true,
  "stock": 999,
  "created_at": "2023-01-20T21:13:45.279000",
  "updated_at": "2023-02-08T00:05:29.785855",
  "image": "http://127.0.0.1:8000/media/images/way.png",
  "rating": null,
  "stars": null,
  "is_popular": false,
  "category": 5,
  "subcategory": null
},
    
] 



*/