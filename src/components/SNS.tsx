import styles from "../styles/SNS.module.css"
import { InstagramEmbed } from 'react-social-media-embed';

interface Posts {
    id: string;
    text: string;
}

const SNS: React.FC = () => {
    

    return (
        <>
        <h3 className={styles.SNSHeader}>Twitter</h3>
        <div className={styles.SNScontainer}>
            <div className={styles.instagram}>
            <p>Twitter posts load here</p>
            </div>
        </div>
        </>
      );
  }
  
  export default SNS;