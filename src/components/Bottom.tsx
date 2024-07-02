import styles from "../styles/Bottom.module.css"
import CafeBar from "../oka-assets/bar_banner_on_pc.jpg"


function Bottom() {

  return (
    <>
      <div className={styles.bottomContainer}>
        <p className={styles.cafeTxt}>キャストは競馬が大好きな人から乗馬をやっている人までとにかくお馬さんが好きな人たちばかり！</p>
        <img className={styles.img} src={CafeBar} alt=""/>
        <p className={styles.copyright}>Copyright © 2018 OKA NO KISEKI OFFICIAL</p>
      </div>
    </>
  );
}

export default Bottom;