
import './Solutions.css'
import Description from './Description'

function Solutions({ data, onSolution, handleChangeButton }) {

  const isButtonChanged = data.is_in_bag === 2
  /*let description = complects.description.split('\r\n-')*/
  //const isButtonChanged = data.is_in_bag > 1 ? true : false;
  //const isButtonChanged = data.is_in_bag === 2 ? true : false;
/*
  function handleChangeButton(data) {
    if(data.id === data.id) {
      data.is_in_bag = 2
    }
  }*/

    function handleClick() {
        onSolution(data)
        handleChangeButton(data)
    }


    let description = data.description.split(',')

  return (

          <li className="solutions__offer">
            <h2 className="solutions__offer-title">{data.name}:</h2>
            <ul className="solutions__offer-wrapper">
            {description.length > 0 && description.map((item)=> (
              <Description
              key={item.index}
              item={item}
              />
            ))}
            </ul>
            <div className="solutions__offer-price-and-btn-container">
                <p className="solutions__offer-price">Цена: {data.price}</p>

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
