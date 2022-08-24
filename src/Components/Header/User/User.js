import { GlobalSvgSelector } from '../../../Assets/icons/GlobalSvgSelector.tsx';
import s from './user.module.scss';


export function User() {
  return (
    <div className={s.user}>
      <button className={s.user__desired}>
        <div className={s.user__desiredImg}>
          <GlobalSvgSelector id='heart'/>
        </div>
      </button>
      <button className={s.user__profile}>
        <span className={s.user__profileImg}>
        <GlobalSvgSelector id='user'/>
        </span>
      </button>
      <button className={s.user__cart}>
        <span className={s.user__cartImg}>
        <GlobalSvgSelector id='cart'/>
        </span>
      </button>
    </div>
  );
}