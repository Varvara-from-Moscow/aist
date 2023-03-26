import offerPic from '../../images/oferpic.png';
import './Maintenance.css';

function Maintenance() {
  return (
      <section className="maintenance">
        <h2 className="maintenance__title">1С Доработка и сопровождение</h2>
        <ul className="maintenance__wrapper">
            <li className="maintenance__container">
                <h2 className="maintenance__container-title">Настройка 1С</h2>
                <ul className="maintenance__container-wrapper">
                    <li className="maintenance__container-text">Помощь в настройке функционала.</li>
                    <li className="maintenance__container-text">Настройка прав пользователей и доступов.</li>
                    <li className="maintenance__container-text">Настройка отчетов и интерфейсов.</li>
                </ul>
            </li>

            <li className="maintenance__container">
                <h2 className="maintenance__container-title">Развитие функционала</h2>
                <ul className="maintenance__container-wrapper">
                    <li className="maintenance__container-text">
                        Проводим совершенствование и развитие функционала 
                        программного обеспечения по мере развития вашего бизнеса.
                    </li>
                    <li className="maintenance__container-text">
                        Доработка программного обеспечения исходя из задач бизнеса.
                    </li>
                </ul>
            </li>

            <li className="maintenance__container">
                <h2 className="maintenance__container-title">Обновление конфигураций и форм отчетности для</h2>
                <ul className="maintenance__container-wrapper">
                    <li className="maintenance__container-text">Типовых конфигураций.</li>
                    <li className="maintenance__container-text">Доработанных конфигураций</li>
                </ul>
            </li>

            <li className="maintenance__container">
                <h2 className="maintenance__container-title">Устранение неполадок</h2>
                <ul className="maintenance__container-wrapper">
                    <li className="maintenance__container-text">Обеспечиваем бесперебойную работу программного обеспечения.</li>
                    <li className="maintenance__container-text">Исправляем ошибки в учете.</li>
                    <li className="maintenance__container-text">Поиск и исправление ошибок пользователей.</li>
                </ul>
            </li>

            <li className="maintenance__container">
                <h2 className="maintenance__container-title">Консультации по работе в программах 1С</h2>
                <ul className="maintenance__container-wrapper">
                    <li className="maintenance__container-text">По телефону.</li>
                    <li className="maintenance__container-text">Удаленно с подключением через интернет.</li>
                    <li className="maintenance__container-text">Лично с выездом специалиста к вам в офис.</li>
                </ul>
            </li>
        </ul>

      </section>
  );
}

export default Maintenance;