import { Component } from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = { onSubmit: PropTypes.func.isRequired };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    
    return (
      <form className={styles.formWrapper} onSubmit={this.handleSubmit}>
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
          value={this.state.name}
          onChange={this.handleChange}
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
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className={styles.btn} type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

export default ContactForm;
