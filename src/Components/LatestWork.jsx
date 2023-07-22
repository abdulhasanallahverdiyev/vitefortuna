import { useContext } from 'react';
import '../Css/LatestWork.css';
import { mainContext } from '../Context/Context';
import { Link } from 'react-router-dom';
// import { AiOutlineArrowRight } from 'react-icons/ai';
const LatestWork = () => {
  const { latest } = useContext(mainContext);
  return (
    <div className="latest_work">
      <div className="container">
        <div className="latest_work_title" data-aos="fade-right">
          <h2 title="Son işlərimiz">Son işlərimiz</h2>
        </div>
        <div className="row">
          {latest &&
            latest.map((work, item) => (
              <div
                className="col-12 col-lg-4 col-md-6 col-xs-6"
                key={item}
                data-aos="fade-down">
                <div className="single_work">
                  <Link to={work?.proje_link} target='_blank' rel='nofollow' className="thumbnail">
                    <img src={work.proje_photo} alt={work.project_name} />
                  </Link>
                  <div className="content-wrapper">
                    <h5 title={work?.project_name} className="title">
                      {work?.project_name}
                    </h5>
                    {/* <Link target="_blank" to={work?.proje_link}>
                      View Work <AiOutlineArrowRight />
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

export default LatestWork;
