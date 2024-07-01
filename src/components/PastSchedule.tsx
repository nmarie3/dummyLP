import React from "react";
import styles from "../styles/PastSchedule.module.css"
import ScheduleDetails from "./ScheduleDetails";



const PastSchedule: React.FC = () => {

    return (
        <>
            <section className={styles.pastSection}>
            <h3 className={styles.pastHeader}>News</h3>
            <div className={styles.pastContainer}>
                <ScheduleDetails postDate="2012.3.31" titleDate="4/10 " title="past event 1" link="https://en.wikipedia.org/wiki/Lycoris_Recoil" />
                <ScheduleDetails postDate="2012.3.31" titleDate="4/10 " title="past event 2" link="https://en.wikipedia.org/wiki/Lycoris_Recoil"/>
                </div>    
            </section>
            </>
      );
  }
  
  export default PastSchedule;