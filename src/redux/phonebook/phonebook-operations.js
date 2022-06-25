import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addItem,
  editItem,
  deleteItem,
  getData,
} from '../../../src/services/api';
const API_ENDPOINT = 'contacts';

const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const options = {
        headers: {
          Authorization: persistedToken,
        },
      };

      const contacts = await getData(API_ENDPOINT, options);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue, getState }) => {
    const contact = {
      name,
      number,
    };

    try {
      const persistedToken = getState().auth.token;
      const options = {
        headers: {
          Authorization: persistedToken,
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };

      const contacts = await getData(API_ENDPOINT, options);
      if (contacts.find(item => item.name === contact.name)) {
        alert(`${contact.name} is already in contacts.`);
        return Promise.reject(
          new Error(`${contact.name} is already in contacts.`)
        );
      }
      const data = await addItem(API_ENDPOINT, contact, options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const editContact = createAsyncThunk(
  'contacts/editContact',
  async (updatedContact, { rejectWithValue, getState }) => {
    console.log('updatedContact', updatedContact);

    try {
      const persistedToken = getState().auth.token;
      const contacts = getState().phonebook.contacts;
      console.log('contacts', contacts);
      const options = {
        headers: {
          Authorization: persistedToken,
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      const data = await editItem(API_ENDPOINT, updatedContact, options);
      console.log('data', data);
      return contacts.map(contact => (contact.id === data.id ? data : contact));
      // return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, getState }) => {
    try {
      const persistedToken = getState().auth.token;
      const contacts = getState().phonebook.contacts;
      console.log('contacts', contacts);
      const options = {
        headers: {
          Authorization: persistedToken,
        },
      };

      const result = await deleteItem(API_ENDPOINT, id, options);
      console.log('result', result);
      return contacts.filter(contact => contact.id !== id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export { addContact, editContact, deleteContact, getContacts };
//
//
//------With vanila async request redux-thunk-------------
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   getContactRequest,
//   getContactSuccess,
//   getContactError,
// } from './phonebook-actions';

// import { addItem, deleteItem, getData } from '../../../src/services/api';
// const API_ENDPOINT = 'contacts';

// const getContacts = () => async dispatch => {
//   dispatch(getContactRequest());

//   try {
//     const contacts = await getData(API_ENDPOINT);
//     console.log('contacts', contacts);
//     dispatch(getContactSuccess(contacts));
//   } catch (error) {
//     dispatch(getContactError(error));
//   }
//   // getData(API_ENDPOINT)
//   //   .then(data => dispatch(getContactSuccess(data)))
//   //   .catch(err => dispatch(getContactError(err)));
// };

// const addContact =
//   ({ name, number }) =>
//   dispatch => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     addItem(API_ENDPOINT, contact)
//       .then(data => dispatch(addContactSuccess(data)))
//       .catch(err => dispatch(addContactError(err)));
//   };

// const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequest());

//   deleteItem(API_ENDPOINT, id)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(err => dispatch(deleteContactError(err)));
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export { addContact, deleteContact, getContacts };
