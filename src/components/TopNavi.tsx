import styles from "../styles/TopNavi.module.css"
import {useState, useEffect} from 'react'
// import Mv_pc from "../oka-assets/mv_pc.jpg";
// import Menu_close from "../assets/menu_close.png";
import Menu from "../assets/menu.png";



const TopNavi: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
    const toggleMenu = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent click event from propagating to the document
      setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
      setIsMenuOpen(false);
  };

  useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
          if (!e.target || !(e.target as HTMLElement).closest(`.${styles.menu}`) && !(e.target as HTMLElement).closest(`.${styles.burgermenu}`)) {
              closeMenu();
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
      <div className={styles.naviBar}>
          <div className={styles.bandTitle}>
              <p className={styles.bandText}>
                  OKA NO KISEKI <span className={styles.lighterTxt}>OFFICIAL SITE</span>
              </p>
          </div>
          <nav>
              <div className={styles.burgermenu} onClick={toggleMenu}>
                  <img className={styles.burgerImg} src={Menu} alt="Menu" />
              </div>
          </nav>
          <div className={`${styles.menu} ${isMenuOpen ? styles.visible : ''}`}>
              <ul className={styles.dropdown}>
                  <li><a href="#news" onClick={closeMenu}>News</a></li>
                  <li><a href="#schedule" onClick={closeMenu}>Schedule</a></li>
                  <li><a href="#music" onClick={closeMenu}>Music</a></li>
                  <li><a href="#members" onClick={closeMenu}>Members</a></li>
                  <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
              </ul>
          </div>
      </div>
  );
};

export default TopNavi;