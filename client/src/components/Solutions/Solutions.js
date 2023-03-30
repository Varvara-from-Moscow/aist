
import './Solutions.css';

function Solutions({data}) {
  return (

          <li className="solutions__offer">
            <h2 className="solutions__offer-title">{data.name}:</h2>
            <ul className="solutions__offer-wrapper">
                <li className="solutions__offer-text">
                1С Розница (базовая)
                </li>
                <li className="solutions__offer-text">
                Онлайн-касса Атол 30ф с ФН 15 или 36 (аппарат + фискальный накопитель + регистрация в ИФНС)
                </li>
                <li className="solutions__offer-text">
                Сканер штрихкодов Mindeo 6600
                </li>
            </ul>
            <div className="solutions__offer-price-and-btn-container">
                <p className="solutions__offer-price">Цена: {data.price}</p>
                <button className="solutions__offer-btn">Выбрать</button>
            </div>
          </li>
  );
}

export default Solutions;