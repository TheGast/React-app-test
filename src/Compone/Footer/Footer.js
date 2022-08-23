function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__contact">
          <div className="footer__contact-title">Наши контакты</div>
          <ul className="footer__contact-list contact-list">
            <li className="contact-list__item"><a href="#" className="contact-list__link">8 800 900 70 90</a></li>
            <li className="contact-list__item"><a href="#" className="contact-list__link">г. Орск Проспект Ленина 71 / А</a></li>
            <li className="contact-list__item"><a href="#" className="contact-list__link">Пн-вс: 10:00 - 21:00 без выходных</a></li>
            <li className="contact-list__item">
              <ul className="social-list">
                <li className="social-list__item">
                  <a href="#" className="social-list__link">
                    <img src="" alt="" />
                  </a>
                </li>
                <li className="social-list__item">
                  <a href="#" className="social-list__link">
                    <img src="" alt="" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <small className="politic">
            <a href="#" className="politic__link">Политика конфиденциальности</a>
          </small>
        </div>
        <div className="footer__pay">
          <div className="footer__pay-title">Способы оплаты</div>
          <ul className="footer__pay-list pay-list">
            <li className="pay-list__item">
              <a href="#" className="pay-list__link">
                <img src="" alt="" />
              </a>
            </li>
            <li className="pay-list__item">
              <a href="#" className="pay-list__link">
                <img src="" alt="" />
              </a>
            </li>
            <li className="pay-list__item">
              <a href="#" className="pay-list__link">
                <img src="" alt="" />
              </a>
            </li>
          </ul>
          <small className="footer__pay-copyright">Все права защищены (С)</small>
        </div>
        <div className="footer__map">
          <img src="" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;