import React from "react";
import styles from "../styles/News.module.css"
import NewsDetails from "./NewsDetails";
import Chisato from "../oka-assets/chisatoo.jpg"



const News: React.FC = () => {

    return (
        <>
            <section className={styles.newsSection}>
            <h3 className={styles.newsHeader}>News</h3>
            <div className={styles.articleContainer}>
                <NewsDetails title="test 1" imageSource={Chisato}/>
                <NewsDetails title="test 2" imageSource={Chisato}/>
                <NewsDetails title="test 3" imageSource={Chisato}/>
                <NewsDetails title="test 4" imageSource={Chisato}/>
                <NewsDetails title="test 5" imageSource={Chisato}/>
                <NewsDetails title="test 6" imageSource={Chisato}/>
                </div>    
            <button className={styles.moreButton}>MORE +</button>
            </section>
            </>
      );
  }
  
  export default News;