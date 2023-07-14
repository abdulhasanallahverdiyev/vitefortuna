import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroServices from '../Components/HeroServices';
import LatestWork from '../Components/LatestWork';

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <main className='main-section'>
      <Helmet>
        <title>Servislər</title>
      </Helmet>
      <HeroServices />
      <LatestWork />
    </main>
  );
};

export default Services;
