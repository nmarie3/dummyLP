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
                        <p className={styles.membersP}>{name}</p>
                        <p className={styles.membersP}>{hobby}</p>
                        <p className={styles.membersP}>{skill}</p>
                        <p className={styles.membersP}>{color}</p>
                        <div className={styles.h4Bottom}>
                            <h4 className={styles.membersH4}>{birthday}</h4>
                            <h4 className={styles.membersH4}>{blood}</h4>
                            <h4 className={styles.membersH4}>{height}</h4>
                            <h4 className={styles.membersH4}>{born}</h4>
                            <h4 className={styles.membersH4}>{uni}</h4>
                        </div>
                    </div>
                    <img className={styles.memberImg} src={imageSource}/>
                </div>
            </div>
        </>

    );
};


export default MembersDetails;