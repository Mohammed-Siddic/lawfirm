import React from 'react';
import styles from './Section.module.css';

const Section = () => {
  return (
    <div className={styles.section}>
        <div className={styles.head}>
            <h1>Let's Introduce</h1>
            <h1>Ourself</h1>
        </div>
        <div className={styles.para}>
            <h3>Criminal Lawyer</h3>
            <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita tempora a dignissimos magnam mollitia porro ex veniam necessitatibus est itaque, natus quae quasi dicta soluta quis nesciunt odit quos harum? Quod eum corporis excepturi tempora est! Sed, earum error.</p>
        </div>
    </div>
  )
}

export default Section;