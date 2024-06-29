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
          <TopNavi />
          <Header />
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
          <Members />
          <Contact />
          <Bottom />
        </>
      );
}

export default App;
