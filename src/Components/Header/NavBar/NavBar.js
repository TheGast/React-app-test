import React from 'react';

import s from './navBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Для интерьера</a></li>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Мебельные</a></li>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Фурнитура</a></li>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Пряжа</a></li>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Новогодние</a></li>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Для шитья</a></li>
        <li className={s.menu__listItem}><a className={s.menu__listLink} href="#">Для одежды</a></li>
      </ul>
    </nav>
  );
}

