import styles from "../styles/Music.module.css"
import Music_ph from "../oka-assets/music_ph.jpg";
import Music_ttl from "../oka-assets/music_ttl.png";
import SectionTitleComponent from "./SectionTitleComponent";

function Music() {

    return (
        <>
            <section className={styles.musicSection}>
            <SectionTitleComponent title="Music." styles={{backgroundColor:"#FF5B4C"}}/>
                    <div className={styles.musicBanner}>
                        <img className={styles.musicImg1} src={Music_ph} alt=""/>
                        <img className={styles.musicImg2} src={Music_ttl} alt=""/>
                    </div>
            </section>
        </>
      );
  }
  
  export default Music;