
import './PopularGoods.css'

function PopularGoods() {
    return (
        <section className="popular-goods">
            <div className="popular-goods__title-wrapper">
                <h3 className="popular-goods__title">Популярные товары</h3>
                <button className="popular-goods__btn">Все товары</button>
            </div>

            <ul className="popular-goods__wrapper">
                <li className="popular-goods__container">
                    <div className="popular-goods__pic"></div>
                    <p className="popular-goods__container-name">Название товара</p>
                    <p className="popular-goods__container-price">10 000 р.</p>
                    <div className="popular-goods__container-btn">
                        <button className="popular-goods__button">О товаре</button>
                        <button className="popular-goods__button">В корзину</button>
                    </div>
                </li>

                <li className="popular-goods__container">
                    <div className="popular-goods__pic"></div>
                    <p className="popular-goods__container-name">Название товара</p>
                    <p className="popular-goods__container-price">10 000 р.</p>
                    <div className="popular-goods__container-btn">
                        <button className="popular-goods__button">О товаре</button>
                        <button className="popular-goods__button">В корзину</button>
                    </div>
                </li>

                <li className="popular-goods__container">
                    <div className="popular-goods__pic"></div>
                    <p className="popular-goods__container-name">Название товара</p>
                    <p className="popular-goods__container-price">10 000 р.</p>
                    <div className="popular-goods__container-btn">
                        <button className="popular-goods__button">О товаре</button>
                        <button className="popular-goods__button">В корзину</button>
                    </div>
                </li>
            </ul>

        </section>
    );
  }
  
  export default PopularGoods;