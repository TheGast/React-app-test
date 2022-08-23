import s from './info.module.scss';

export function Info() {
  return (
    <div className={s.info}>
      <a href="tel:+78009007090" className={s.info__phone}>8 800 900 70 90</a>
      <div className={s.info__work}>Пн-вс: 10:00 - 21:00</div>
    </div>
  );
}