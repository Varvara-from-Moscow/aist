import MainPic from '../../images/mainpicture.png' //src={MainPic}
import './Services.css'

function Services() {
  return (
      <section className="services">
        <h2 className="services__title">Услуги</h2>
        <ul className="services__wrapper">
            <li className="services__container">
                <div className="services__container-pic services__container-pic-cz"></div>
                <h3 className="services__container-title">Честный знак</h3>
                <p className="services__container-text">
                    Изготовление ЭЦП, регистрация в системе, настройка учета, интеграция 
                    с системой, ведение учета, проведение инвентаризации, корректировка остатков, 
                    интеграция с товароучетными системами.
                </p>
                <button className="services__container-btn">Подробнее</button>
            </li>
            <li className="services__container">
                <div className="services__container-pic services__container-pic-egaist"></div>
                <h3 className="services__container-title">ЕГАИС</h3>
                <p className="services__container-text">
                Изготовление ЭЦП (Электронная цифровая подпись), регистрация в системе, настройка учета, 
                ведение учета, проведение инвентаризации, корректировка остатков.
                </p>
                <button className="services__container-btn">Подробнее</button>
            </li>
            <li className="services__container">
                <div className="services__container-pic services__container-pic-1c"></div>
                <h3 className="services__container-title">1С</h3>
                <p className="services__container-text">
                Поставка, установка, настройка, доработка, сопровождение программ компании 1С.
                </p>
                <button className="services__container-btn">Подробнее</button>
            </li>
            <li className="services__container">
                <div className="services__container-pic services__container-pic-ofd"></div>
                <h3 className="services__container-title">OFD.RU</h3>
                <p className="services__container-text">
                Подключение, продление
                </p>
                <button className="services__container-btn">Подробнее</button>
            </li>
            <li className="services__container">
                <div className="services__container-pic services__container-pic-ezp"></div>
                <h3 className="services__container-title">ЭЦП</h3>
                <p className="services__container-text">
                Получение ЭЦП (Электронная цифровая подпись) физическим и юридическим лицам для Торгов 
                (Различные торговые площадки).
                </p>
                <button className="services__container-btn">Подробнее</button>
            </li>
            <li className="services__container">
                <div className="services__container-pic services__container-pic-mercuriy"></div>
                <h3 className="services__container-title">ФГИС Меркурий</h3>
                <p className="services__container-text">
                Регистрация в системе, ведение учета.
                </p>
                <button className="services__container-btn">Подробнее</button>
            </li>
        </ul>

      </section>
  );
}

export default Services;