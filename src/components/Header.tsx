import { useState, useEffect } from "react";
import HeaderPC from "../oka-assets/mv_pc.jpg";
import Alert from "../oka-assets/alert.png";
import styles from "../styles/Header.module.css";
import HeaderMobile from "../assets/mv_sp.jpg"


function Header() {
    const [headerImg, setHeaderImg] = useState(() =>
        window.innerWidth < 940 ? HeaderMobile : HeaderPC);

    useEffect(() => {
        const handleResize = () => {
            setHeaderImg(window.innerWidth < 940 ? HeaderMobile : HeaderPC);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.container}>
        <img className={styles.headerImg} src={headerImg} alt=""/>
        <img className={styles.alertImg} src={Alert} alt=""/>
        </div>
      );
  }
  
  export default Header;