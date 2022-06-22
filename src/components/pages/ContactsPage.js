import ContactList from '../ContactList';
import Filter from '../Filter';
import s from '../../components/App.module.css';

const Contacts = () => {
  return (
    <>
      <h2 className={s.Title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
