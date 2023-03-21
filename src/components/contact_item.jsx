import PropTypes from 'prop-types';

export default function ContactItem({ name, tel, id, handleClick }) {
  return (
    <li>
      {name}: {tel}
      <button
        style={{
          display: 'inline-block',
          margin: '0 5px',
          padding: '3px',
          borderRadius: '5px',
          fontWeight: '700',
          cursor: 'pointer',
        }}
        type="button"
        name={id}
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
