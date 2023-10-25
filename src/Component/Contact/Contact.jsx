import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.letter}>
            <h1>Subscribe our newsletter</h1>
        </div>
        <br />
        <div className={styles.details}>
            <input type="text" name="NAME" id={styles.name} placeholder='Name:' />
            <input type="text" name="EMAIL" id={styles.email} placeholder='Enter your email' />
            <button id={styles.submit} type="button">Send</button>
        </div>
    </div>
  )
}

export default Contact;