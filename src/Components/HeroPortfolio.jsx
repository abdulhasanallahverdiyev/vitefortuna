import { useContext, useState } from 'react';
import '../Css/HeroPortfolio.css';
import portfolioImage from '../assets/portfolio.webp';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { mainContext } from '../Context/Context';
const HeroPortfolio = () => {
  const { handleSelect, service } = useContext(mainContext);
  const [isopen, setIsOpen] = useState(true);
  return (
    <div className="portfolio_hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="portfolio_content">
              <h2 data-aos="fade-down" title="Fortuna - media">
                Fortuna - media
              </h2>
              <p data-aos="fade-right">Öz brendini bizimlə tanıt!</p>
              <div
                className="select_filter"
                onClick={() => setIsOpen(!isopen)}
                data-aos="fade-left">
                <div className="icon">
                  {' '}
                  {isopen ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <select onChange={handleSelect}>
                  <option disabled>Seçim et</option>
                  <option value="all">Hamısı</option>
                  {service?.map((e, index) => (
                    <option key={index} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="hero_portfolio_image" data-aos="fade-left">
              <img src={portfolioImage} alt="Fortuna - media" title='Fortuna - media' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortfolio;
