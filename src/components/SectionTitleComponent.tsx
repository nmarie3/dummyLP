import React from 'react';
import styles from "../styles/SectionTitle.module.css"

interface Title {
    title: string;
    styles?: React.CSSProperties;
}

const SectionTitleComponent: React.FC<Title> = ({title, styles: backgroundColor}) => {

    return (
        <>
            <div className={styles.fullTitle}>
                <div className={styles.titleBar} style={backgroundColor}></div>
                <h3 className={styles.allTitlesStyle}>{title}</h3>
            </div>   
        </>

    );
};


export default SectionTitleComponent;