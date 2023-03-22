import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './form';
import ContactList from './contact_list';
import Filter from './filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const contactId = shortid.generate();
    data.id = contactId;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts!`);
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteBtn = e => {
    const deletedId = e.currentTarget.name;
    const deletedIndex = contacts.findIndex(el => el.id === deletedId);
    const updatedContacts = contacts;
    updatedContacts.splice(deletedIndex, 1);
    setContacts([...updatedContacts]);
  };

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts:</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList contacts={filtredContacts} handleClick={handleDeleteBtn} />
    </div>
  );
}
