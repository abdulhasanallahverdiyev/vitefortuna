import { Link } from 'react-router-dom';
import whatsapp from '../../src/assets/wp-iconss.png';
import '../Css/WriteToUs.css';
const WriteToUs = () => {
  return (
    <section className="write-to-us">
      <div className="container">
        <div className="main-box">
          <div className="vibration_img">
            <Link to="https://api.whatsapp.com/send?phone=+994 55 808 76 47">
              <img
                src={whatsapp}
                alt="whatsapp icon"
                width="140px"
                height="140px"
              />
            </Link>
          </div>
          <div className="chat">
            <h2 title="Sualınızı whatsappla bildirin">Sualınız var? </h2>
            <h3 title="bir kliklə bizə yazın">
              Bir kliklə yazın, yardımçı olaq.{' '}
            </h3>
            <Link
              rel="nofollow"
              to="https://api.whatsapp.com/send?phone=+994558087647"
              target="_blank">
              WhatsApp-a yazın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteToUs;
