import { useContext, useEffect } from 'react';
import logoFooter from '../../src/assets/FortunaMedia.png';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../Css/Footer.css';
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import {
  BsFacebook,
  BsFillTelephonePlusFill,
} from 'react-icons/bs';
import { mainContext } from '../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  const { subState, postSubData, handleSubChange } = useContext(mainContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="subscribe_area" >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="subscribe-text">
                <h3 title='Fortuna media ilə əlaqə'>Bizimlə əlaqə</h3>
                <h6 title='Fortuna media ilə əlaqə'>Zəhmət olmasa əlaqə poçtunuzu qeyd edin</h6>
              </div>
            </div>
            <div className="col-12 col-lg-6" >
              <div className="subscribe-form">
                <form onSubmit={postSubData}>
                  <input
                    type="email"
                    name="email"
                    value={subState.email}
                    onChange={handleSubChange}
                    placeholder="E-poçt hesabınızı qeyd edin"
                    required
                  />
                  <button type="submit">Göndər</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container">
          <div className="footer_head">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="footer_logo_content">
                  <img src={logoFooter} alt="Fortuna-media" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus quaerat sed facilis repellendus! Dolorem maiores,
                    ipsam nostrum pariatur cumque quidem iure est earum, eum,
                    magnam sapiente unde voluptate vero quam.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div className="footer_links_content">
                  <h3 title='Bizim Şirkət'>Bizim Şirkət</h3>
                  <ul>
                    <li>
                      <Link to="/">Əsas səhifə</Link>
                    </li>
                    <li>
                      <Link to="/about">Haqqımızda</Link>
                    </li>
                    <li>
                      <Link to="/services">Xidmətlər</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/organization">Orqanizasiya</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="footer_contact_content">
                  <h3 title='Əlaqə'>Əlaqə</h3>
                  <ul>
                    <li>
                      <GoLocation />
                      <span>Baku, Azerbaijan</span>
                    </li>
                    <li>
                      <GoMail />
                      <Link to="mailto:adkasd@gmail.com">adkasd@gmail.com</Link>
                    </li>
                    <li>
                      <BsTelephoneOutboundFill />
                      <Link to="tel:+994-12 565 39 05">+994-12 565 39 05</Link>
                    </li>
                    <li>
                      <BsFillTelephonePlusFill />
                      <Link to="tel:+994-70 565 39 05">+994-70 565 39 05</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="subscribe_and_social">
                  <h3 title='Sosial'>Sosial</h3>
                  <div className="subscribe_social_content">
                    <ul>
                      <li>
                        <Link to="/" rel='nofollow' target='_blank'>
                          {' '}
                          <AiOutlineInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" rel='nofollow' target='_blank'>
                          <BsFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" rel='nofollow' target='_blank'>
                          {' '}
                          <AiOutlineWhatsApp />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_end">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-6 col-xs-6 ">
                <article className="footer_end_left">
                  <p>
                    ©<script>document.write(new Date().getFullYear())</script>
                    2023 Bütün hüquqlar qorunur.
                  </p>
                </article>
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-xs-6">
                <article className="footer_end_right">
                  <p>
                    Dizayn:
                    <Link target="_blank" to="https://www.neymantech.com/">
                      NeymanTech
                    </Link>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
