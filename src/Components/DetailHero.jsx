import '../Css/DetailHero.css';
import { Link } from 'react-router-dom';
const DetailHero = ({ data }) => {
  return (
    <div className="detail_hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="detail_title">{data?.name}</h1>
          </div>
          <div className="col-lg-12">
            <h4 className="detail_routes" title="Xidmətlər">
              <Link to="/services" rel="nofollow" >
                Xidmətlər
              </Link>
              <span>/{data?.name}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
