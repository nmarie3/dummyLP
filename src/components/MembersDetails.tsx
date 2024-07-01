import React from 'react';
import styles from "../styles/Members.module.css"

interface Members {
    imageSource: string;
    name: React.ReactNode;
    hobby: React.ReactNode;
    skill: React.ReactNode;
    color: React.ReactNode;
    birthday?: React.ReactNode;
    blood?: React.ReactNode;
    height?: React.ReactNode;
    born?: React.ReactNode;
    uni?: React.ReactNode;
}

const MembersDetails: React.FC<Members> = ({imageSource, name, hobby, skill, color, birthday, blood, height, born, uni}) => {

    return (
        <>
            <div className={styles.memberProfile}>
                <div className={styles.withImg}>
                    <div className={styles.sideDetails}>
                        <p>{name}</p>
                        <p>{hobby}</p>
                        <p>{skill}</p>
                        <p>{color}</p>
                    </div>
                    <div className={styles.bottomDetails}>
                        <h4>{birthday}</h4>
                        <h4>{blood}</h4>
                        <h4>{height}</h4>
                        <h4>{born}</h4>
                        <h4>{uni}</h4>
                    </div>
                    <img className={styles.memberImg} src={imageSource}/>
                </div>
            </div>
        </>

    );
};


export default MembersDetails;