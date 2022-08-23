import logo from './logo.png';
import s from './logo.module.scss'

export function Logo() {
  return (
    <a className={s.logo} href="#">
      <img src={logo} alt="Logo" />
    </a>
  );
}