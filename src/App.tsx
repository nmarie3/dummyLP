import React from 'react';
import TopNavi from './components/TopNavi';
import Header from './components/Header';
import News from './components/News';
import SNS from './components/SNS';
import Schedule from './components/Schedule';
import PastSchedule from './components/PastSchedule';
import Music from './components/Music';
import Members from './components/Members';
import Contact from './components/Contact';
import Bottom from './components/Bottom';
import styles from './styles/App.module.css';


function App() {
  return (
        <>
        <div className={styles.body}>
          <TopNavi />
          <Header />
        <section className={styles.belowHeader}>
        <div className={styles.newsSNS}>
        <div className={styles.news}>
          <News />
        </div>
        <div className={styles.sns}>
          <SNS />
        </div>
        </div>
          <Schedule/>
          <PastSchedule />
          <Music />
        <div className={styles.members}> 
          <Members />
        </div>
          <Contact />
        <div className={styles.bottom}> 
          <Bottom />
        </div> 
          </section>
          </div>
        </>
      );
}

export default App;
