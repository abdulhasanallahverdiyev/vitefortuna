import  { useEffect } from 'react'
import { Helmet } from "react-helmet";
import HeroSection from '../Components/HeroSection';
import Collaborator from '../Components/Collaborator';
import HomeNewWorks from '../Components/HomeNewWorks';
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (

    <main className='main-section'>
      <Helmet>
        <title>Əsas səhifə</title>
      </Helmet>
      <HeroSection />
      <Collaborator />
      <HomeNewWorks />
    </main>
  )
}

export default Home
