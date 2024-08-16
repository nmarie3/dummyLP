import {useState, useEffect} from "react";
import styles from "../styles/Bottom.module.css"
import CafePC from "../oka-assets/bar_banner_on_pc.jpg"
import CafeMobile from "../assets/bar_banner_sp.jpg"

function Bottom() {
  const [cafeImg, setCafeImg] = useState(() =>
    window.innerWidth < 540 ? CafeMobile : CafePC);

useEffect(() => {
    const handleResize = () => {
        setCafeImg(window.innerWidth < 540 ? CafeMobile : CafePC);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  return (
    <>
      <div className={styles.bottomContainer}>
        <p className={styles.cafeTxt}>キャストは競馬が大好きな人から乗馬をやっている人までとにかくお馬さんが好きな人たちばかり！</p>
        <img className={styles.cafeImg} src={cafeImg} alt=""/>
        <p className={styles.copyright}>Copyright © 2018 OKA NO KISEKI OFFICIAL</p>
      </div>
    </>
  );
}

export default Bottom;