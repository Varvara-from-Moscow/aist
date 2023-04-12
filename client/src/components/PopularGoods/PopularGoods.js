
import './PopularGoods.css'
import { Link } from 'react-router-dom'
import PopularGood from './PopularGood'

function PopularGoods({popular, handleSaveGood, handleChangeButton, savedGoods}) {


    return (
        <section className="popular-goods">
            <div className="popular-goods__title-wrapper">
                <h2 className="popular-goods__title">Популярные товары</h2>
                <Link className='' to="/equipment">
                  <button className="popular-goods__btn">Все товары</button>
                </Link>
                
            </div>

            <ul className="popular-goods__wrapper">
            {popular.length > 0 && popular.map((item)=> (
              <PopularGood
                key={item.id}
                popular={item}
                onGood={handleSaveGood}
                handleChangeButton={handleChangeButton}
                savedGoods={savedGoods}
                
              />
      ))}
            </ul>

        </section>
    );
  }
  
  export default PopularGoods;
  