import s from './search.module.scss';

export function Search() {
  return (
    <div className={s.search}>
      <input className={s.search__input} type="text" placeholder="Я ищу" />
    </div>
  );
}
