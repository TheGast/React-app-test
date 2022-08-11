import logo from './Images/logo.png';
import heart from './Images/heart.svg';
import user from './Images/user.svg';
import cart from './Images/cart.svg';

import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="header__top">
          <a className="logo" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <div className="location">Санкт-Петербург</div>
          <div className="search">
            <input className="search__input" type="text" placeholder="Я ищу" />
          </div>
          <div className="info">
            <a href="tel:+78009007090" className="info__phone">8 800 900 70 90</a>
            <div className="info__work">Пн-вс: 10:00 - 21:00</div>
          </div>
          <div className="user-btns">
            <button className="user-btns__desired">
              <div className="user-btns__desired-img">
                <img src={heart} />
              </div>
            </button>
            <button className="user-btns__profile">
              <span className="user-btns__profile-img">
                <img src={user} />
              </span>
            </button>
            <button className="user-btns__cart">
              <span className="user-btns__cart-img">
                <img src={cart} />
              </span>
            </button>
          </div>
        </div>


        <nav className="menu header__menu">
          <ul className="menu__list">
            <li className="menu__list-item"><a className="menu__list-link" href="#">Для одежды</a></li>
            <li className="menu__list-item"><a className="menu__list-link" href="#">Для интерьера</a></li>
            <li className="menu__list-item"><a className="menu__list-link" href="#">Мебельные</a></li>
            <li className="menu__list-item"><a className="menu__list-link" href="#">Фурнитура</a></li>
            <li className="menu__list-item"><a className="menu__list-link" href="#">Пряжа</a></li>
            <li className="menu__list-item"><a className="menu__list-link" href="#">Новогодние</a></li>
            <li className="menu__list-item"><a className="menu__list-link" href="#">Для шитья</a></li>
          </ul>
        </nav>


      </div>
    </header>
  );
}



