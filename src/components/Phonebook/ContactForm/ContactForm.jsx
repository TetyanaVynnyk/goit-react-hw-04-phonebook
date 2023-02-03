import { useState } from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './contactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(({...state}));
    setState({ name: '', number: '' });
  };

  const { name, number } = state;

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <label className={styles.inputTitle} htmlFor="nameId">
        Name
      </label>
      <input
        className={styles.formInput}
        type="text"
        name="name"
        nameid={nanoid()}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={styles.inputTitle} htmlFor="phoneId">
        Number
      </label>
      <input
        className={styles.formInput}
        type="tel"
        name="number"
        phoneid={nanoid()}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={styles.btn} type="submit">
        Add contacts
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
