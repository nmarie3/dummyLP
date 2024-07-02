import styles from "../styles/Bottom.module.css"
import CafeBar from "../oka-assets/bar_banner_on_pc.jpg"


function Bottom() {

  return (
    <>
      <div className={styles.bgColor}>
        <img className={styles.img} src={CafeBar} alt=""/>
      </div>
    </>
  );
}

export default Bottom;