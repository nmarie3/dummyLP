import React from "react";
import styles from "../styles/Schedule.module.css"
import ScheduleDetails from "./ScheduleDetails";



const Schedule: React.FC = () => {

    return (
        <>
            <section className={styles.eventsSection}>
            <h3 className={styles.eventsHeader}>Schedule</h3>
            <div className={styles.eventsContainer}>
                <ScheduleDetails postDate="2012.3.31" titleDate="4/10 " title="test 1" link="https://en.wikipedia.org/wiki/Lycoris_Recoil"/>
                <ScheduleDetails postDate="2012.3.31" titleDate="4/10 " title="test 2" link="https://en.wikipedia.org/wiki/Lycoris_Recoil" />
                <ScheduleDetails postDate="2012.3.31" titleDate="4/10 " title="test 3" link="https://en.wikipedia.org/wiki/Lycoris_Recoil"/>
                </div>    
            </section>
            </>
      );
  }
  
  export default Schedule;