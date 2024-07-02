import Mv_pc from "../oka-assets/mv_pc.jpg";
import styles from "../styles/Header.module.css";


function Header() {

    return (
        <div className={styles.container}>
        <img className={styles.headerImg} src={Mv_pc} alt=""/>
        </div>
      );
  }
  
  export default Header;