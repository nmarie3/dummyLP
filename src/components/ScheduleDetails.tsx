import React from 'react';
import styles from "../styles/Schedule.module.css"

interface Events {
    titleDate: string;
    title: string;
    postDate: string;
    link: string;
    isNew: boolean;
    isCurrentEvent: boolean;
}

const ScheduleDetails: React.FC<Events> = ({title, titleDate, postDate, link, isNew, isCurrentEvent}) => {

    return (
        <>
        <div className={styles.schedules}>
            <div className={styles.postDate}>
                <h4>{postDate}</h4>
                {isNew && <h3 className={styles.new}>NEW</h3>}
            </div>
            <h2 className={styles.eventTitle}>
                {isCurrentEvent && <div className={styles.decorationTop}></div>}
                <a href={link} style={{ textDecoration: 'none'}}><span style={{color: '#FE6057', textDecoration: 'underline'}}>
                    {titleDate}</span>
                    <span style={{color: '#0D0C09', textDecoration: 'underline'}}>{title}</span></a>
                {isCurrentEvent && <div className={styles.decorationBottom}></div>}
            </h2>
        </div> 
        </>

    );
};


export default ScheduleDetails;