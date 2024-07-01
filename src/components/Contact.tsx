import { useState} from 'react'
import styles from "../styles/Contact.module.css"

interface ContactState {
    email: string;
    text: string;
    isEmailValid: boolean;
    isTextValid: boolean;
}


const Contact: React.FC = () => {
    const [state, setState] = useState<ContactState>({
        email: '',
        text: '',
        isEmailValid: false,
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

        const handleBack = () => {
            alert('前のページに戻る');
            }
    };

    return (
        <>
            <h2 className={styles.contactHeader}>Contact</h2>
            <div className={styles.formBox}>
                <label className={styles.formLabel}>
                    <h4>すべて入力必須項目です。</h4>
            <div className={styles.nameBox}>

                <label className={styles.formLabel}>
                <span className={styles.label}>お名前 <span style={{color: '#F96354'}}>（＊）</span></span>
                    <input
                        type="text"
                        placeholder="Text"
                        value={state.text}
                        onChange={(e) => setState({ ...state, text: e.target.value })}
                        style={{ backgroundColor: state.isTextValid ? 'red' : 'white' }}
                    />
                </label>
            </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })}
                        style={{ backgroundColor: state.isEmailValid ? '#F96354' : '#F3F2ED' }}
                    />
                </label>
                <label className={styles.formLabel}>
                    <input
                        type="text"
                        placeholder="Text"
                        value={state.text}
                        onChange={(e) => setState({ ...state, text: e.target.value })}
                        style={{ backgroundColor: state.isTextValid ? 'red' : 'white' }}
                    />
                </label>
    
                <button type="button" onClick={handleSubmit}>送信する SUBMIT ＞</button>
            </div>
        </>
    );
};

export default Contact;