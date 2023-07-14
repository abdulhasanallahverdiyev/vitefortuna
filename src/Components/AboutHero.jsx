import '../Css/AboutHero.css';
import aboutHero from '../../src/assets/about_hero_image.webp';
const AboutHero = () => {
  return (
    <>
      <section id="home-about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5" data-aos="fade-right">
              <div className="home-about-content">
                <h2>Biz kimik?</h2>
                <p>
                  Sirket haqqinda qisa melumat olacag, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7" data-aos="fade-left">
              <div className="about-image">
                <img src={aboutHero} alt="home about" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
