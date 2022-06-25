import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import EditForm from '../EditForm';
import Modal from '../Modal';
import s from '../ContactList/ContactList.module.css';

const ContactListItem = ({ contacts, onDeleteContact }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [id, setId] = useState();

  const toggleEditForm = (id, number, name) => {
    setName(name);
    setNumber(number);
    setId(id);
    return setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div className={s.Item}>
            <span>{name}</span>
            <span className={s.Number}>{number}</span>
          </div>
          <div className={s.WrapperBtn}>
            <button
              type="button"
              className={s.Btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>

            <button
              type="button"
              className={s.Btn}
              onClick={() => toggleEditForm(id, number, name)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
      {showModal && (
        <Modal>
          <EditForm
            toggleEditForm={toggleEditForm}
            toggleModal={toggleModal}
            nameForEdit={name}
            numberForEdit={number}
            id={id}
          />
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
