import  { useEffect } from 'react'
import "../Css/Target.css"
import 'aos/dist/aos.css'
import Aos from "aos"
const Target = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div   className='target_section'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 col-md-10 ">
                        <div className="target_content">
                            <h2 data-aos="fade-right">Hədəfimiz</h2>
                            <p data-aos="fade-left">Burda hedef nedi onla bagli yazi olacag .adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target
