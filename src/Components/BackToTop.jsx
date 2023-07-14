import { useEffect, useState } from 'react';
import { FaLevelUpAlt } from 'react-icons/fa';
import '../Css/BackToTop.css';
const BackToTop = () => {
  const [backtoTop, setBackToTop] = useState(false);
  //?go to top
  const toTop = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    toTop();
    scrollUp();
  }, []);
  return (
    <div className="scroll_btn">
      {backtoTop && (
        <button
          style={
            backtoTop
              ? { overflow: 'visible', visibility: 'visible', opacity: '1' }
              : { overflow: 'hidden', visibility: 'hidden', opacity: '0' }
          }
          onClick={scrollUp}>
          <FaLevelUpAlt />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
