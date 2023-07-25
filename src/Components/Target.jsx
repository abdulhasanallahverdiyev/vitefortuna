import { useEffect } from 'react';
import '../Css/Target.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
const Target = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="target_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="target_content">
              <h2 title="Hədəfimiz">Hədəfimiz</h2>
              <p>
                Reklam Agentliyinin əsas hədəfi göstərdiyi xidmət sahəsində olan
                boşluqları aradan qaldırmaq, müştərilərə şablondan kənar daha
                yüksək və kreativ ideyalarla xidmət həyata keçirməkdir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
