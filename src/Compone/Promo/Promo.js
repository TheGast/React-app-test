import './Promo.scss';

function Promo() {
  return (
    <section className="promo">
      <div className="container promo__container">
        <div className="promo__item item-promo">
          <div className="item-promo__descr">
            <span className="item-promo__discount">20%</span>
            <div className="item-promo__text">на новые ткани</div>
          </div>
        </div>
        <div className="promo__item item-promo">
          <div className="item-promo__descr">
            <span className="item-promo__discount">15%</span>
            <div className="item-promo__text">на ткани</div>
          </div>
        </div>
        <div className="promo__item item-promo">
          <div className="item-promo__descr">
            <span className="item-promo__discount">6%</span>
            <div className="item-promo__text">8 марта на ткани</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;