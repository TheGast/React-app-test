

export function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="header__top">
          <a className="logo" href="#">
            <img className="logo__img" src="" alt="Logo Image"/>
          </a>
          <div className="location">Санкт-Петербург</div>
          <input className="search" type="text"/>
          <div className="info">8 800 900 70 90</div>
          <div className="btns">Buttons</div>
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



