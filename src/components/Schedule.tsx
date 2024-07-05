import React from "react";
import styles from "../styles/Schedule.module.css"
import ScheduleDetails from "./ScheduleDetails";
import SectionTitleComponent from "./SectionTitleComponent";

const event1 = {
    postDate:"2012.3.31",
    isNew:true, 
    titleDate:"4/10 ", 
    title:"Schedule Title 1", 
    link:"https://en.wikipedia.org/wiki/Lycoris_Recoil",
    isCurrentEvent: true,
};

const event2 = {
    postDate:"2012.3.31", 
    isNew:true, 
    titleDate:"4/10 ", 
    title:"Schedule Title 2", 
    link:"https://en.wikipedia.org/wiki/Lycoris_Recoil",
    isCurrentEvent: true,
};

const event3 = {
    postDate:"2012.3.31", 
    isNew: false, 
    titleDate:"4/10 ", 
    title:"Schedule Title 3", 
    link:"https://en.wikipedia.org/wiki/Lycoris_Recoil",
    isCurrentEvent: true,
};



const Schedule: React.FC = () => {

    return (
        <>
            <SectionTitleComponent title="Schedule." styles={{backgroundColor:"#FF5B4C"}}/>
            <section className={styles.eventsSection}>
            <div className={styles.eventsContainer}>
                <ScheduleDetails postDate={event1.postDate} isNew={event1.isNew} titleDate={event1.titleDate} title={event1.title} link={event1.link} isCurrentEvent={event1.isCurrentEvent}/>
                <ScheduleDetails postDate={event2.postDate} isNew={event2.isNew} titleDate={event2.titleDate} title={event2.title} link={event2.link} isCurrentEvent={event2.isCurrentEvent}/>
                <ScheduleDetails postDate={event3.postDate} isNew={event3.isNew} titleDate={event3.titleDate} title={event3.title} link={event3.link} isCurrentEvent={event3.isCurrentEvent}/>
                </div>    
            </section>
            </>
      );
  }
  
  export default Schedule;