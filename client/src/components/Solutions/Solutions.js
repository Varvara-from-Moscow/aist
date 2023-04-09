
import './Solutions.css'
import Description from './Description'

function Solutions({ data, onSolution, isAdded }) {

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
              item={item}
              key={item.index}
              />
            ))}
            </ul>
            <div className="solutions__offer-price-and-btn-container">
                <p className="solutions__offer-price">Цена: {data.price}</p>
                  <button className="solutions__offer-btn" onClick={handleClick}>Выбрать</button>
            </div>
          </li>
  );
}

export default Solutions;
