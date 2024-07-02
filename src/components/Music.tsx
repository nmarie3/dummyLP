import styles from "../styles/Music.module.css"
import Music_ph from "../oka-assets/music_ph.jpg";
import Music_ttl from "../oka-assets/music_ttl.png";

function Music() {

    return (
        <>
            <section className={styles.musicSection}>
                <h1>Music</h1>
                    <div className={styles.musicBanner}>
                        <img className={styles.musicImg1} src={Music_ph} alt=""/>
                        <img className={styles.musicImg2} src={Music_ttl} alt=""/>
                    </div>
            </section>
        </>
      );
  }
  
  export default Music;