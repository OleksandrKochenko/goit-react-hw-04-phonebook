import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const nameId = shortid.generate();
  const telId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'tel':
        setTel(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setTel('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, tel });
    reset();
  };

  return (
    <form
      style={{ border: '1px solid black', padding: '20px', width: '400px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor={nameId}>Name</label>
      <br />
      <input
        type="text"
        value={name}
        name="name"
        id={nameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor={telId}>Phone</label>
      <br />
      <input
        type="tel"
        value={tel}
        name="tel"
        id={telId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <br />
      <br />
      <button
        style={{
          padding: '3px',
          borderRadius: '5px',
          fontWeight: '700',
          cursor: 'pointer',
        }}
        type="submit"
      >
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
