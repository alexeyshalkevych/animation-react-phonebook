import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import './App.css';
import { AppContainer, AppTitle, AppSubTitle } from './App.styled';

const filterContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  addContact = contact => {
    const { contacts } = this.state;

    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    const stateContact = contacts.find(item => item.name === contact.name);

    if (stateContact) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onAddContact={this.addContact} />
        <AppSubTitle>Contacts</AppSubTitle>
        {contacts.length >= 2 && (
          <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}
