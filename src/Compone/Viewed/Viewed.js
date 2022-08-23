import './Viewed.scss'
import img1 from './item-1.jpg';

function Viewed() {
  return (
    <section className="viewed">
      <div className="container ">
        <h2 className="viewed__title section-title">Вы просматривали</h2>
        <div className="viewed__slider">
          <div className="viewed__item item-viewed">
            <div className="item-viewed__img">
              <img src={img1} alt="" />
            </div>
            <div className="item-viewed__descr">
              <div className="item-viewed__name">
                <span>Рогожка</span>
                Альпийская деревенька
              </div>
              <ul className="item-viewed__param">
                <li className="item-viewed__param-name">Ширина
                  <span className="item-viewed__param-count">1.5 м</span>
                </li>
                <li className="item-viewed__param-name">Состав
                  <span className="item-viewed__param-count">100%</span>
                </li>
                <li className="item-viewed__param-name">Плотность
                  <span className="item-viewed__param-count">170 гр/м2</span>
                </li>
              </ul>
            </div>
            <div className="item-viewed__bottom">
              <div className="item-viewed__price">
                <span className="item-viewed__price-new">240 ₽</span>
                <span className="item-viewed__price-old">360 ₽</span>
              </div>
              <button className="item-viewed__btn">В корзину</button>
            </div>
          </div>
          <div className="viewed__item item-viewed">
            <div className="item-viewed__img">
              <img src={img1} alt="" />
            </div>
            <div className="item-viewed__descr">
              <div className="item-viewed__name">
                <span>Рогожка</span>
                Альпийская деревенька
              </div>
              <ul className="item-viewed__param">
                <li className="item-viewed__param-name">Ширина
                  <span className="item-viewed__param-count">1.5 м</span>
                </li>
                <li className="item-viewed__param-name">Состав
                  <span className="item-viewed__param-count">100%</span>
                </li>
                <li className="item-viewed__param-name">Плотность
                  <span className="item-viewed__param-count">170 гр/м2</span>
                </li>
              </ul>
            </div>
            <div className="item-viewed__bottom">
              <div className="item-viewed__price">
                <span className="item-viewed__price-new">240 ₽</span>
                <span className="item-viewed__price-old">360 ₽</span>
              </div>
              <button className="item-viewed__btn">В корзину</button>
            </div>
          </div>
          <div className="viewed__item item-viewed">
            <div className="item-viewed__img">
              <img src={img1} alt="" />
            </div>
            <div className="item-viewed__descr">
              <div className="item-viewed__name">
                <span>Рогожка</span>
                Альпийская деревенька
              </div>
              <ul className="item-viewed__param">
                <li className="item-viewed__param-name">Ширина
                  <span className="item-viewed__param-count">1.5 м</span>
                </li>
                <li className="item-viewed__param-name">Состав
                  <span className="item-viewed__param-count">100%</span>
                </li>
                <li className="item-viewed__param-name">Плотность
                  <span className="item-viewed__param-count">170 гр/м2</span>
                </li>
              </ul>
            </div>
            <div className="item-viewed__bottom">
              <div className="item-viewed__price">
                <span className="item-viewed__price-new">240 ₽</span>
                <span className="item-viewed__price-old">360 ₽</span>
              </div>
              <button className="item-viewed__btn">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Viewed;