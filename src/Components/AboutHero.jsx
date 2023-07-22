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
                <h2 title='Haqqımızda'>Biz kimik?</h2>
                <p>
                  Fortuna Media MMC fəaliyyətinə 2019 cu ildən başlayıb. Reklam
                  Agentliyinin əsas hədəfi göstərdiyi xidmət sahəsində olan
                  boşluqları aradan qaldırmaq, müştərilərə şablondan kənar daha
                  yüksək və kreativ ideyalarla xidmət həyata keçirməkdir.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7" data-aos="fade-left">
              <div className="about-image">
                <img src={aboutHero} alt="haqqımızda" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
