import PropTypes from 'prop-types';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import s from '../../components/App.module.css';

const Contacts = ({ toggleModal }) => {
  return (
    <>
      <h2 className={s.Title}>Phonebook</h2>
      <ContactForm />

      <h2 className={s.Title}>Contacts</h2>
      <Filter />
      <ContactList toggleModal={toggleModal} />
    </>
  );
};

Contacts.propTypes = {
  toggleModal: PropTypes.func,
};

export default Contacts;
