
import './PopapLuckySendForm.css'

function PopapLuckySendForm({isOpen, onClose}) {


    return (
       
    <aside className={`popapLuckySendForm ${isOpen && 'popapLuckySendForm_opened'}`}>
        <div className="popapLuckySendForm__container">
        <button className="popapLuckySendForm__closebtn" type="button" onClick={onClose}></button>
            <div className="popapLuckySendForm__title-wrapper">
                <p className="popapLuckySendForm__title-letters">А</p>
                <p className="popapLuckySendForm__title-letters">И</p>
                <p className="popapLuckySendForm__title-letters">С</p>
                <p className="popapLuckySendForm__title-letters">Т</p>
            </div>
            <p className="popapLuckySendForm__title">Спасибо! Ваша заявка успешно отправлена. В ближайшее время с Вами свяжутся</p>
        </div>
    </aside>
    );
  }
  
  export default PopapLuckySendForm;