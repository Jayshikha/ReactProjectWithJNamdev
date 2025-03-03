import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="text">TEXT</label>
        <textarea id="text" name="text"></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>SUBMIT</button>
    </form>
  );
};

export default Form;
