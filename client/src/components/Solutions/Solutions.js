
import './Solutions.css'
import Description from './Description'

function Solutions({ data, onSolution, handleChangeButton, savedGoods }) {


  const isButtonChanged = savedGoods.some(item => item.id === data.id)
  //const isButtonChanged = data.is_in_bag === 2
  /*let description = complects.description.split('\r\n-')*/
  //const isButtonChanged = data.is_in_bag > 1 ? true : false;
  //const isButtonChanged = data.is_in_bag === 2 ? true : false;
/*
  function handleChangeButton(data) {
    if(data.id === data.id) {
      data.is_in_bag = 2
    }
  }*/

  /*

  
  */
let price = (new Intl.NumberFormat('ru-RU').format(data.price));

    function handleClick() {
        onSolution(data)
    }


    let description = data.description.split(',')

  return (

          <li className="solutions__offer">
            <h2 className="solutions__offer-title">{data.name}:</h2>
            <ul className="solutions__offer-wrapper">
            {description.length > 0 && description.map((item)=> (
              <Description
              key={item.index + 100000}
              item={item}
              />
            ))}
            </ul>
            <div className="solutions__offer-price-and-btn-container">
                <p className="solutions__offer-price">Цена: <span className="solutions__offer-price-span"> {price}</span></p>

                {isButtonChanged ?

                <button className="solutions__offer-btn">Добавлено в корзину</button>
                :
                <button className="solutions__offer-btn" onClick={handleClick}>Выбрать</button>
                }

            </div>
          </li>
  );
}

export default Solutions;

/*

, isButtonChanged
                {isButtonChanged? 

                <button className="solutions__offer-btn" onClick={handleClick}>Добавлено</button>
                :
                <button className="solutions__offer-btn" onClick={handleClick}>Выбрать</button>
                }


*/
