import React from 'react';
import styles from "../styles/News.module.css"

interface Articles {
    imageSource: string;
    title: string;
}

const NewsDetails: React.FC<Articles> = ({imageSource, title}) => {

    return (
        <>
            <div className={styles.newsArticle}>
                <img className={styles.articleImg} src={imageSource} alt={title}/>
                <p>{title}</p>
            </div>    
        </>

    );
};


export default NewsDetails;