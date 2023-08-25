import React from 'react'
import styles from './Navigation.module.css'


const Navigation = () => {
  return (
    <div className ="container">
      <nav>
        <div className={styles.logo}>SMK</div>

        <ul className={styles.listItems}>
          <li>
            <a href="#" className={styles.link}>
              HOME
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;