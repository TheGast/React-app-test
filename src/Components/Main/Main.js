import Promo from "../Promo/Promo";
import Popular from "../Popular/Popular";
import Viewed from "../Viewed/Viewed";

function Main() {
  return (
    <div className="main">
      <Promo/>
      <Popular/>
      <Viewed/>
    </div>
  );
}

export default Main;