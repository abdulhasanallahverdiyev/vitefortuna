import { useEffect, useState } from 'react';
import '../Css/HomeNewWorks.css';
import { Link } from 'react-router-dom';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import { BASE_URL } from '../httpRequest/httpRequest';
const HomeNewWorks = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(`${BASE_URL}service-api/last_works/`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="newWorks" >
      <div className="container">
        <div className="home_work_title" data-aos="fade-right">
          <h2 title='Fortuna medianın son işləri'>Son işlərimiz</h2>
        </div>
        <div className="row">
          {data &&
            data
              .sort((a, b) => new Date(b?.created_at) - new Date(a?.created_at))
              .slice(0, 3)
              .map((work, item) => (
                <div  data-aos="fade-down"
                  className="col-12 col-lg-4 col-md-6"
                  key={item}>
                  <div className="single_work">
                    <Link to={work?.proje_link} target='_blank'  rel="nofollow" className="thumbnail">
                      <img src={work.proje_photo} alt={work.project_name} />
                    </Link>
                    <div className="content-wrapper">
                      <h5 className="title" title={work?.project_name}>{work?.project_name}</h5>
                      {/* <Link target="_blank" to={work?.proje_link}>
                        Ətraflı <AiOutlineArrowRight />
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNewWorks;
