
import './Solutions.css';

function Solutions() {
  return (
      <section className="solutions">
        <h2 className="solutions__title">Автоматизация под ключ</h2>
        <ul className="solutions__offer-container">
          <li className="solutions__offer">
            <h2 className="solutions__offer-title">Комплект для магазина с одним рабочим местом:</h2>
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
                <p className="solutions__offer-price">Цена:</p>
                <button className="solutions__offer-btn">Выбрать</button>
            </div>

          </li>
          <li className="solutions__offer">
            <h2 className="solutions__offer-title">Комплект для магазина с двумя рабочими местами:</h2>
            <ul className="solutions__offer-wrapper">
                <li className="solutions__offer-text">
                1С Розница (Проф)
                </li>
                <li className="solutions__offer-text">
                1С Дополнительное рабочее место
                </li>
                <li className="solutions__offer-text">
                2 Онлайн-кассы Атол 30ф с ФН 15 или 36 (аппарат + фискальный накопитель + регистрация в ИФНС)
                </li>
                <li>
                2 Сканера штрихкодов Mindeo 6600
                </li>
            </ul>
            <div className="solutions__offer-price-and-btn-container">
                <p className="solutions__offer-price">Цена:</p>
                <button className="solutions__offer-btn">Выбрать</button>
            </div>
          </li>
        </ul>
      </section>
  );
}

export default Solutions;