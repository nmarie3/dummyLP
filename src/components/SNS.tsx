import styles from "../styles/SNS.module.css"
import SectionTitleComponent from "./SectionTitleComponent";

interface Posts {
    id: string;
    text: string;
}

const SNS: React.FC = () => {
    

    return (
        <>
        <div className={styles.SNScontainer}>
        <SectionTitleComponent title="Twitter." styles={{backgroundColor:"#FF5B4C"}}/>
            <div className={styles.instagram}>
            <p>Twitter posts load here</p>
            </div>
        </div>
        </>
      );
  }
  
  export default SNS;