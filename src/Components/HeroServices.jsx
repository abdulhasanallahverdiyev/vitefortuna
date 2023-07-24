import { useContext } from 'react';
import '../Css/HeroServices.css';
import { Link } from 'react-router-dom';
import { mainContext } from '../Context/Context';
const HeroServices = () => {
  const { service } = useContext(mainContext);
  return (
    <div className="hero_services">
      <div className="hero_services_title">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 title='Xidmətlərimiz'>Xidmətlərimiz</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {service &&
            service.map((item, index) => (
              <div key={index} className="col-12 col-lg-4 col-md-6" data-aos="fade-right">
                <div className="single_service">
                  <div className="service_icon">
                    <img src={item.logo} alt={item.name} />
                  </div>
                  <div className="service_content">
                    <Link to={`${item.id}`} rel='nofollow'>{item.name} </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
