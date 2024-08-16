import {useState, useEffect} from 'react';
import TopNavi from './components/TopNavi';
import Header from './components/Header';
import News from './components/News';
import Schedule from './components/Schedule';
import PastSchedule from './components/PastSchedule';
import Music from './components/Music';
import Members from './components/Members';
import Contact from './components/Contact';
import Bottom from './components/Bottom';
import styles from './styles/App.module.css';


function App() {
  // const [showPastSchedule, setShowPastSchedule] = useState(window.innerWidth > 1024);

  // useEffect(() => {
  //     const handleResize = () => {
  //         setShowPastSchedule(window.innerWidth > 1024);
  //     };

  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //         window.removeEventListener('resize', handleResize);
  //     };
  // }, []);

  return (
        <>
        <div className={styles.body}>
          <TopNavi />
          <Header />
        <div className={styles.news}>
          <News />
        </div>
          <Schedule/>
          {/* {showPastSchedule && <PastSchedule />} */}
          <PastSchedule />
          <Music />
        <div className={styles.members}> 
          <Members />
        </div>
          <Contact />
        <div className={styles.bottom}> 
          <Bottom />
        </div> 
          </div>
        </>
      );
}

export default App;
