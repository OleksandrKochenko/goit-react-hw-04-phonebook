import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './form';
import ContactList from './contact_list';
import Filter from './filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const contactId = shortid.generate();
    data.id = contactId;
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDeleteBtn = e => {
    const deletedId = e.currentTarget.name;
    const deletedIndex = this.state.contacts.findIndex(
      el => el.id === deletedId
    );
    this.setState(prevState => {
      const prevContacts = prevState.contacts;
      prevContacts.splice(deletedIndex, 1);
      return {
        contacts: [...prevContacts],
      };
    });
  };

  render() {
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div
        style={{
          padding: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts:</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filtredContacts}
          handleClick={this.handleDeleteBtn}
        />
      </div>
    );
  }
}

export default App;
