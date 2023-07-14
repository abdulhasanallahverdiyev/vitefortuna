import  { useEffect } from 'react'
import {Helmet} from "react-helmet";
import HeroPortfolio from '../Components/HeroPortfolio';
import PortfolioCard from '../Components/PortfolioCard';
const Portfolio = () => {
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
        <title>Portfolio</title>
      </Helmet>
            <HeroPortfolio />
            <PortfolioCard/>
        </main>
    )
}

export default Portfolio
