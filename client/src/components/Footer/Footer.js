import logo from '../../images/logo.png';
import './Footer.css';

function Footer() {
  return (
      <footer className="footer">
        <img src={logo} className="footer-logo" alt="logo" />
        <div className="footer__wrapper">
            <div className="footer__wrapper-container">
                <ul className="footer__info-container">
                    <li className="footer__info-container-li footer__info-container-li-ip">ИП Шашкова Зоя Федоровна</li>

                    <li className="footer__info-container-li">ОГРНИП: 319265100139440</li>
                    <li className="footer__info-container-li footer__info-container-li-iin">ИНН: 261901001245</li>

                    <li className="footer__info-container-li footer__info-container-li-mail">support@it-aist.ru</li>

                    <li className="footer__info-container-li footer__info-container-li-tel">8(962)440-07-40</li>
                    <li className="footer__info-container-li">8(8652)40-07-40</li>

                </ul>
                <nav className="footer__nav-wrapper">
                    <ul className="footer__nav-container">
                        <li className="footer__nav-container-li">О компании</li>
                        <li className="footer__nav-container-li">Торговое оборудование</li>
                        <li className="footer__nav-container-li">Услуги</li>
                    </ul>
                </nav>
            </div>
            <nav className="footer__links-nav">
                <ul className="footer__links-container">
                    <li className="footer__links-container-li">Политика конфиденциальности</li>
                    <li className="footer__links-container-li">Обработка персональных данных</li>
                    <li className="footer__links-container-li">Пользовательское соглашение</li>
                </ul>
            </nav>
        </div>
      </footer>
  );
}

export default Footer;