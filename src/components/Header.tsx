import Mv_pc from "../oka-assets/mv_pc.jpg";
import Alert from "../oka-assets/alert.png";
import styles from "../styles/Header.module.css";


function Header() {

    return (
        <div className={styles.container}>
        <img className={styles.headerImg} src={Mv_pc} alt=""/>
        <img className={styles.alertImg} src={Alert} alt=""/>
        </div>
      );
  }
  
  export default Header;