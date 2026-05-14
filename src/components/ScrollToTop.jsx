import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' is usually better for page changes to avoid seeing the scroll, but user asked for 'smooth' or professional feel. 
                         // However, 'smooth' can be jarring if the user clicks a link at the bottom and sees the whole page scroll up before it changes.
                         // I will use 'instant' for the reset to ensure the NEW page starts at the top immediately.
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
