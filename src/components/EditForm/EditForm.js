import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import shortid from 'shortid';
import s from './EditForm.module.css';

const EditForm = ({ nameForEdit, numberForEdit, id, toggleModal }) => {
  const [name, setName] = useState(nameForEdit);
  const [number, setNumber] = useState(numberForEdit);

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedContact = {
      name,
      number,
      id,
    };

    dispatch(editContact(updatedContact));
    toggleModal();
  };

  return (
    <form className={s.ContactForm} onSubmit={handleSubmit}>
      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={nameId}>
          Name
          <input
            id={nameId}
            className={s.Input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={numberId}>
          Number
          <input
            id={numberId}
            className={s.Input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button type="submit" className={s.FormBtn}>
        Edit contact
      </button>
      <button className={s.CloseBtn} onClick={toggleModal}>
        <MdClose size="24" />
      </button>
    </form>
  );
};

EditForm.propTypes = {
  nameForEdit: PropTypes.string.isRequired,
  numberForEdit: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default EditForm;
