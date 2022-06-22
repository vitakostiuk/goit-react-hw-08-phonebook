import { createSlice } from '@reduxjs/toolkit';
// import {signup, login, signOut, getUser} from './authOperations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  loading: false,
  loadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase();
  },
});

export default authSlice.reducer;
