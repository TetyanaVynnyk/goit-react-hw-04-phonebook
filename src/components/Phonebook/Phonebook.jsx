import { Component } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts!==contacts) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }

  addContact = contact => {
    const auditName = this.state.contacts.find(
      e => e.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (auditName) return alert(auditName.name + ' is already in contacts.');

    contact.id = nanoid();
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {visibleContact.length ? (
          <div>
            <Filter value={filter} changeFilter={this.changeFilter} />
            <ContactList
              contacts={visibleContact}
              onDeleteContacts={this.deleteContact}
            />
          </div>
        ) : (
          <p>You have no contacts</p>
        )}
      </div>
    );
  }
}

export default Phonebook;
