import { createSlice } from '@reduxjs/toolkit';
import { signup, login, signOut, getUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
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
    builder
      // REDUCER FOR SIGN_UP
      .addCase(signup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.loading = false;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // REDUCER FOR GET_USER
      .addCase(getUser.pending, state => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loadingUser = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loadingUser = false;
        state.error = payload;
        state.token = null;
      })

      // REDUCER FOR LOGIN
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.loading = false;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // REDUCER FOR LOG_OUT
      .addCase(signOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, () => {
        return initialState;
        // state.loading = false;
        // state.user.name = null;
        // state.user.email = null;
        // state.token = null;
      })
      .addCase(signOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
