import { combineReducers } from 'redux';
import {
  getContacts,
  addContact,
  editContact,
  deleteContact,
} from './phonebook-operations';
import { changeFilter } from './phonebook-actions';
import { createReducer } from '@reduxjs/toolkit';

const contacts = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [editContact.fulfilled]: (_, { payload }) => {
    return payload;
  },

  [deleteContact.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [editContact.pending]: () => true,
  [editContact.fulfilled]: () => false,
  [editContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(false, {
  [getContacts.pending]: () => null,
  [getContacts.rejected]: (_, { payload }) => payload,

  [addContact.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,

  [editContact.pending]: () => null,
  [editContact.rejected]: (_, { payload }) => payload,

  [deleteContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter, loading, error });
//
//
//
//
//------With vanila async request redux-thunk-------------
// import { combineReducers } from 'redux';
// import {
//   addContactSuccess,
//   addContactRequest,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   changeFilter,
//   getContactRequest,
//   getContactSuccess,
//   getContactError,
// } from './phonebook-actions';
// import { createReducer } from '@reduxjs/toolkit';

// const contacts = createReducer([], {
//   [getContactSuccess]: (state, { payload }) => payload,

//   [addContactSuccess]: (state, { payload }) => {
//     return state.find(contact => contact.name === payload.name)
//       ? alert(`${payload.name} is already in contacts.`)
//       : [payload, ...state];
//   },

//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const loading = createReducer(false, {
//   [getContactRequest]: () => true,
//   [getContactSuccess]: () => false,
//   [getContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({ contacts, filter, loading });
