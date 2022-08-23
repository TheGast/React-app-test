import s from './user.module.scss';


export function User() {
  return (
    <div className={s.user}>
      <button className={s.user__desired}>
        <div className={s.user__desiredImg}>
          {/* <img src={heart} /> */}
        </div>
      </button>
      <button className={s.user__profile}>
        <span className={s.user__profileImg}>
           {/* <img src={user} />  */}
        </span>
      </button>
      <button className={s.user__cart}>
        <span className={s.user__cartImg}>
          {/* <img src={cart} /> */}
        </span>
      </button>
    </div>
  );
}