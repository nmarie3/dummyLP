import React from 'react';
import styles from "../styles/Schedule.module.css"

interface Events {
    titleDate: string;
    title: string;
    postDate: string;
    link: string;
}

const ScheduleDetails: React.FC<Events> = ({title, titleDate, postDate, link}) => {

    return (
        <>
            <div className={styles.postDate}>
                <h4>{postDate}</h4>
                <h3 className={styles.new}>NEW</h3>
            </div>
            <h2 className={styles.eventTitle}>
                <a href={link} style={{ textDecoration: 'none'}}><span style={{color: '#FE6057', textDecoration: 'underline'}}>
                    {titleDate}</span>
                    <span style={{color: '#0D0C09', textDecoration: 'underline'}}>{title}</span></a>
            </h2>    
        </>

    );
};


export default ScheduleDetails;