import PropTypes from 'prop-types';
import ContactItem from './contact_item';

export default function ContactList({ contacts, handleClick }) {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <ContactItem
            key={item.id}
            name={item.name}
            tel={item.tel}
            id={item.id}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
