import '../Css/Pakets.css';
import { TbCurrencyManat } from 'react-icons/tb';
import { AiOutlineCheck } from 'react-icons/ai';
const Pakets = ({ data }) => {
  return (
    <div className="pakets_section">
      <div className="container">
        <div className="pakets_title">
          <h2 title="paketlər">paketlər</h2>
        </div>
        <div className="row">
          {data?.services_package &&
            data?.services_package?.map((e, index) => (
              <div key={index} className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div className="pakets">
                  <div className="text_center">
                    <h2 className="heading" title={e?.package_name}>
                      {e?.package_name}
                    </h2>
                    <div className="price">
                      <sup>
                        <TbCurrencyManat />
                      </sup>
                      <span className="number">
                        {e?.price}
                        <small className="per">/{e?.price_period}</small>
                      </span>
                    </div>
                    <h3
                      className="excerpt"
                      title="Bütün xüsusiyyətlərdən həzz alın">
                      Bütün xüsusiyyətlərdən həzz al
                    </h3>
                    <ul className="pricing_text">
                      {e?.package_property &&
                        e?.package_property.map((property, uid) => (
                          <li key={uid}>
                            <p>
                              <AiOutlineCheck />
                              {property?.property}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pakets;
