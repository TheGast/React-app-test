import Promo from "../Promo/Promo";
import Popular from "../Popular/Popular";
import Viewed from "../Viewed/Viewed";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className="main">
      <Promo/>
      <Popular/>
      <Viewed/>
      <Footer/>
    </div>
  );
}

export default Main;