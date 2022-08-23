// import logo from './Images/logo.png';
// import heart from './Images/heart.svg';
// import user from './Images/user.svg';
// import cart from './Images/cart.svg';
// // import './Header.scss';
import { Logo } from './Logo/Logo';
import {Location} from './Location/Location';
import {Search} from './Search/Search';
import { Info } from './Info/Info';
import { User } from './User/User';

import s from './header.module.scss';

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__top}>
          <Logo/>
          <Location/>
          <Search/>
          <Info/>
          <User/>
        </div>
      </div>
    </header>
  );
}



