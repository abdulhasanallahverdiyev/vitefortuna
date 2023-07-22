import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../httpRequest/httpRequest';
import axios from 'axios';
import '../Css/HomeHero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [slider, setSlider] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}core-api/slider/`);
        setSlider(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    nav: false,
  };
  return (
    <section className="hero">
      {slider?.length > 0 ? (
        <OwlCarousel className="hero-carousel owl-theme" {...options}>
          {slider
            ?.sort((a, b) => new Date(b?.created_at) - new Date(a?.created_at))
            ?.slice(0, 5)
            ?.map((slider, index) => (
              <div
                className="item"
                key={index}
                style={{ background: `url(${slider?.slider_image})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <article className="hero-content">
                        <h1
                          className="hero-title"
                          title={slider?.slider_header}>
                          {slider?.slider_header}
                        </h1>
                        <p className="hero-paragraph">{slider?.content}</p>
                        <Link
                          to="/portfolio"
                          target="_blank"
                          rel='nofollow'
                          className="btn black">
                          Portfolio
                        </Link>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </OwlCarousel>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default HeroSection;
