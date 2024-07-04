import React from "react";
import styles from "../styles/News.module.css"
import NewsDetails from "./NewsDetails";
import Stock1 from "../assets/stock1.jpg"
import Stock2 from "../assets/stock2.jpg"
import Stock3 from "../assets/stock3.jpg"
import Stock4 from "../assets/stock4.jpg"
import Stock5 from "../assets/stock5.jpg"
import Stock6 from "../assets/stock6.jpg"
import SectionTitleComponent from "./SectionTitleComponent";



const News: React.FC = () => {

    return (
        <>
            <section className={styles.newsSection}>
            <SectionTitleComponent title="News." styles={{backgroundColor:"#FF5B4C"}}/>
            <div className={styles.articleContainer}>
                <NewsDetails title="News Title 1" imageSource={Stock1}/>
                <NewsDetails title="News Title 2" imageSource={Stock2}/>
                <NewsDetails title="News Title 3" imageSource={Stock3}/>
                <NewsDetails title="News Title 4" imageSource={Stock4}/>
                <NewsDetails title="News Title 5" imageSource={Stock5}/>
                <NewsDetails title="News Title 6" imageSource={Stock6}/>
                </div>
            <div className={styles.buttonStyle}>    
            <button className={styles.moreButton}>MORE +</button>
            </div>
            </section>
            </>
      );
  }
  
  export default News;