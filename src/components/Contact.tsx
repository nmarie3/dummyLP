import { useState} from 'react'
import styles from "../styles/Contact.module.css"
import SectionTitleComponent from "./SectionTitleComponent";


interface ContactState {
    name: string;
    email: string;
    inquiry: string;
    text: string;
    isEmailValid: boolean;
    isNameValid: boolean;
    isInquiryValid: boolean;
    isTextValid: boolean;
}


const Contact: React.FC = () => {
    const [state, setState] = useState<ContactState>({
        email: '',
        name: '',
        inquiry: '',
        text: '',
        isEmailValid: false,
        isNameValid: false,
        isInquiryValid: false,
        isTextValid: false,
    });

    const validateForm = () => {
        let valid = true;
        let updatedState = { ...state };

        if (!state.email.includes('@')) {
            updatedState.isEmailValid = true;
            valid = false;
        } else {
            updatedState.isEmailValid = false;
        }

        if (state.name === '') {
            updatedState.isNameValid = true;
            valid = false;
        } else {
            updatedState.isNameValid = false;
        }

        if (state.inquiry === '') {
            updatedState.isInquiryValid = true;
            valid = false;
        } else {
            updatedState.isInquiryValid = false;
        }

        if (state.text === '') {
            updatedState.isTextValid = true;
            valid = false;
        } else {
            updatedState.isTextValid = false;
        }

        setState(updatedState);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            alert('送信済 Submitted.');
        }
    };

    const handleBack = () => {
        alert('前のページに戻る');
    }

    return (
        <>
        <div id="contact">
        <SectionTitleComponent title="Contact." styles={{backgroundColor:"#FF5B4C"}}/>
        <section className={styles.contactAll}>
            <p className={styles.smallTxt}>すべて入力必須項目です。</p>
            <p className={styles.label}>お名前 <span style={{color: '#F96354'}}>（＊）</span></p>
            <input
                className={styles.normalBox}
                type="name"
                placeholder="Text"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                style={{ backgroundColor: state.isNameValid ? '#F96354' : '#F3F2ED' }}
            />
            <p className={styles.label}>メールアドレス <span style={{color: '#F96354'}}>（＊）</span></p>
            <input
                className={styles.emailBox}
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                style={{ backgroundColor: state.isEmailValid ? '#F96354' : '#F3F2ED' }}
            />
            <p className={styles.label}>お問い合わせ内容 <span style={{color: '#F96354'}}>（＊）</span></p>
            <input
                className={styles.normalBox}
                type="inquiry"
                placeholder="Text"
                value={state.inquiry}
                onChange={(e) => setState({ ...state, inquiry: e.target.value })}
                style={{ backgroundColor: state.isInquiryValid ? '#FE6556' : '#F3F2ED' }}
            />
            <p className={styles.label}>質問内容 <span style={{color: '#F96354'}}>（＊）</span></p>
            <textarea
                className={styles.textBox}
                placeholder="Text"
                value={state.text}
                onChange={(e) => setState({ ...state, text: e.target.value })}
                style={{ backgroundColor: state.isTextValid ? '#FE6556' : '#F3F2ED' }}
            />
        </section>
        <div className={styles.buttonGroup}>
            <button className={styles.backBtn} type="button" onClick={handleBack}>＜ BACK</button>
            <button className={styles.submitBtn} type="button" onClick={handleSubmit}>SUBMIT ＞</button>
        </div>
        </div>
        </>
    );
};

export default Contact;