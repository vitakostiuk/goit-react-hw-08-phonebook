import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {
  deleteContact,
  getContacts,
  // editContact
} from '../../redux/phonebook/phonebook-operations';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(state =>
    filteredContacts(state.phonebook.contacts, state.phonebook.filter)
  );

  const onDeleteContact = id => dispatch(deleteContact(id));

  // const onEditContact = ({name, number}) => dispatch(editContact({name, number}));

  return (
    <ul className={s.List}>
      {token && (
        <ContactListItem
          contacts={contacts}
          onDeleteContact={onDeleteContact}
          // onEditContact={onEditContact}
        />
      )}
    </ul>
  );
};

function filteredContacts(allContacts, filter) {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

export default ContactList;
