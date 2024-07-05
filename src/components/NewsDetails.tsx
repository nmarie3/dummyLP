import React from 'react';
import styles from "../styles/News.module.css"

interface Articles {
    imageSource: string;
    title: string;
    link: string;
}

const NewsDetails: React.FC<Articles> = ({imageSource, title, link}) => {

    return (
        <>
            <div className={styles.newsArticle}>
                <img className={styles.articleImg} src={imageSource} alt={title}/>
                <p className={styles.newsTitle}>
                <a href={link} style={{ textDecoration: 'none'}}>{title}</a>
                </p>
            </div>    
        </>

    );
};


export default NewsDetails;