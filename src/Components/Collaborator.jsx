import { useContext, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Css/Referance.css';
import { Link } from 'react-router-dom';
import { mainContext } from '../Context/Context';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
const Collaborator = () => {
  const { collaborator } = useContext(mainContext);
  useEffect(() => {
    Aos.init();
  }, []);
  const options = {
    nav: true,
    margin: 10,
    stagePadding: 30,
    items: 4,
    responsive: {
      0: {
        loop: false,
        items: 1,
        stagePadding: 0,
      },
      345: {
        loop: false,
        items: 2,
        stagePadding: 0,
      },
      600: {
        loop: false,
        items: 2,
      },
      768: {
        loop: false,
        dots: false,
        items: 3,
      },
      1000: {
        loop: false,
        dots: false,
        items: 4,
      },
    },
  };
  return (
    <section id="referance">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="referance-content" data-aos="fade-right">
              <h2 title="Fortuna media-nın əməkdaşları">Əməkdaşlarımız</h2>
            </div>
          </div>
        </div>
        {collaborator?.length > 0 ? (
          <OwlCarousel className="referance-carousel owl-theme" {...options}>
            {collaborator?.map((e, index) => (
              <div className="item" key={index}>
                <Link target="_blank" to={e.link} rel="nofollow">
                  <img
                    src={e?.logo}
                    alt={e?.name}
                    title={e?.name}
                    width="100%"
                    height="150px"
                  />
                </Link>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
};

export default Collaborator;
