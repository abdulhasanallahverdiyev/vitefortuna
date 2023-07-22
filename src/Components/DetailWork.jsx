import { useEffect, useState } from 'react';
import '../Css/DetailWork.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useParams } from 'react-router-dom';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { BASE_URL } from '../httpRequest/httpRequest';
const DetailWork = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [works, setWorks] = useState([]);
  const [noworks, setNowork] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchMainDetailData = async () => {
      try {
        const response = await fetch(`${BASE_URL}service-api/services/` + id);
        const data = await response.json();
        setWorks(data);
      } catch (error) {
        console.error('Error fetching main detail data:', error);
      }
    };
    fetchMainDetailData();
  }, [id]);
  useEffect(() => {
    const fetchAdditionalInfoData = async () => {
      try {
        const response = await fetch(`${BASE_URL}service-api/last_works/`);
        const data = await response.json();
        setNowork(data);
      } catch (error) {
        console.error('Error fetching additional info data:', error);
      }
    };
    fetchAdditionalInfoData();
  }, []);

  return (
    <div className="detail_work">
      <div className="container">
        <div className="detail_work_title" data-aos="fade-up">
          <h2 title='Son işlərimiz'>Son işlərimiz</h2>
        </div>
        <div className="row">
          {noworks
            ?.filter((item) => item?.service?.name === works?.name)
            ?.map((e, index) => (
              <div
                key={index}
                className="col-12 col-lg-4 col-md-6" data-aos="fade-right">
                <div className="single_work">
                  <Link to={e?.proje_link} className="thumbnail" rel='nofollow' target="_blank">
                    <img src={e?.proje_photo} alt="last work" />
                  </Link>
                  <div className="content-wrapper">
                    <h5 className="title" title={e?.project_name}>{e?.project_name}</h5>
                    {/* <Link target="_blank" to={e?.proje_link}>
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

export default DetailWork;
