import PropTypes from 'prop-types';

import styles from './contactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.contactItem} key={id}>
        <p className={styles.contact}>
          {name}:{number}
        </p>
        <button
          className={styles.btn}
          onClick={() => onDeleteContacts(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;

ContactList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
