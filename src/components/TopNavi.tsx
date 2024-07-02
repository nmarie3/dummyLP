import styles from "../styles/TopNavi.module.css"
import { useState} from 'react'
import Mv_pc from "../oka-assets/mv_pc.jpg";
import Menu_close from "../assets/menu_close.png";
import Menu from "../assets/menu.png";



const TopNavi: React.FC = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuClicked(!isMenuClicked);
    };
  
    return (
      <div className={styles.naviBar}>
        <p style={{ fontWeight: 'bold' }}>
          OKA NO KISEKI <span style={{ fontWeight: 'lighter' }}>OFFICIAL SITE</span>
        </p>
        <nav>
          <div className={styles.burgermenu} onClick={toggleMenu}>
            <img className={styles.burgerImg} src={Menu} alt="Menu" />
          </div>
        </nav>
        <div className={`${styles.menu} ${isMenuClicked ? styles.visible : ''}`}>
          <ul className={styles.dropdown}>
            <li>News</li>
            <li>Schedule</li>
            <li>Music</li>
            <li>Members</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default TopNavi;