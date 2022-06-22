// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'https://connections-api.herokuapp.com';

const signup = createAsyncThunk('auth/signup', async credentials => {
  // const data = { ...credentials };
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Request-body": "application/json; charset=UTF-8",
  //   },
  // };
  // const response = await fetch(`${BASE_URL}/users/signup`, options);
  // console.log(response);
});

const login = createAsyncThunk('auth/login', async credentials => {});
const signOut = createAsyncThunk('auth/signOut', async () => {});
const getUser = createAsyncThunk('auth/getUser', async () => {});

export { signup, login, signOut, getUser };
