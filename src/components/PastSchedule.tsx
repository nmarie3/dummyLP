import React from "react";
import styles from "../styles/Schedule.module.css"
import ScheduleDetails from "./ScheduleDetails";
import SectionTitleComponent from "./SectionTitleComponent";

const pastEvent1 = {
    postDate:"2012.3.31",
    isNew:false, 
    titleDate:"4/10 ", 
    title:"Past Schedule Title 1", 
    link:"https://en.wikipedia.org/wiki/Lycoris_Recoil",
    isCurrentEvent: false,
};

const pastEvent2 = {
    postDate:"2012.3.31", 
    isNew:false, 
    titleDate:"4/10 ", 
    title:"Past Schedule Title 2", 
    link:"https://en.wikipedia.org/wiki/Lycoris_Recoil",
    isCurrentEvent: false,
};

const PastSchedule: React.FC = () => {

    return (
        <>
            <section className={styles.pastSection}>
            <SectionTitleComponent title="Past Schedule." styles={{backgroundColor:"#C0AE85"}}/>
            <div className={styles.pastContainer}>
                <ScheduleDetails postDate={pastEvent1.postDate} isNew={pastEvent1.isNew} titleDate={pastEvent1.titleDate} title={pastEvent1.title} link={pastEvent1.link} isCurrentEvent={pastEvent1.isCurrentEvent}/>
            </div>
            <div className={styles.pastContainer}>    
            <ScheduleDetails postDate={pastEvent2.postDate} isNew={pastEvent2.isNew} titleDate={pastEvent2.titleDate} title={pastEvent2.title} link={pastEvent2.link} isCurrentEvent={pastEvent2.isCurrentEvent}/>
            </div>    
            </section>
            </>
      );
  }
  
  export default PastSchedule;