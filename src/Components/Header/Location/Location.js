import { GlobalSvgSelector } from '../../../Assets/icons/GlobalSvgSelector.tsx';
import s from './location.module.scss';


export function Location() {
  return (
    <div className={s.location}>
      <GlobalSvgSelector id='location' />
      <span className={s.location__name}>Санкт-Петербург</span>
    </div>
  );
}