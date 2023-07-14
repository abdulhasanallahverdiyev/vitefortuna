import  { useEffect } from 'react'
import { Helmet } from "react-helmet";
import AboutHero from '../Components/AboutHero';
import WriteToUs from '../Components/WriteToUs';
import Target from '../Components/Target';
import InputsField from '../Components/InputsField';


const About = () => {
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
        <title>Haqqımızda</title>
      </Helmet>
      <AboutHero/>
      <WriteToUs />
      <Target />
      <InputsField />
    </main>
  )
}

export default About
