import React from 'react'
import styles from './ContactUs.module.css'
import Button from '../Button/Button';


const ContactUs = () => {
  return (
    <div className={ `container ${styles.container}`}>
      <h1 className={styles.title}>CONTACT US </h1>
      <p className={styles.para}>
        LETS CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WHETHER YOU A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH
        OUT.
      </p>
    </div>
  );
}

export default ContactUs;