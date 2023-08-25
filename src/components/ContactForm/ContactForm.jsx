import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import {MdEmail} from 'react-icons/md'



const ContactForm = () => {
  



  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.btnContainer}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<MdCall />} />
        </div>

        <Button isOutline={true} text="VIA EMAIL FROM" icon={<MdEmail />} />

        <form>
          <div className={styles.formController}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formController}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formController}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" />
          </div>
          <div  className={styles.submitBtn}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contactImg}>
        <img src="./images/3969587.jpg" alt="conIMg" width={450} />
      </div>
    </section>
  );
}

export default ContactForm;