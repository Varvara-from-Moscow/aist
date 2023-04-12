import sertificateofd from '../../images/sertificateofd.png';
import sertificate from '../../images/sertificate.png';
import sertaskom from '../../images/sertaskom.png';
import './Certificates.css';


function Certificates() {
  return (
      <section className="certificates">
        <h2 className="certificates__title">Сертификаты соответствия</h2>
        <ul className="certificates__wrapper">
          <li className="certificates__container">
            <img src={sertificate} className="certificates__pic"></img>
          </li>
          <li className="certificates__container">
            <img src={sertaskom} className="certificates__pic"></img>
          </li>
          <li className="certificates__container">
            <img src={sertificateofd} className="certificates__pic"></img>
          </li>
        </ul>
      </section>
  );
}

export default Certificates;