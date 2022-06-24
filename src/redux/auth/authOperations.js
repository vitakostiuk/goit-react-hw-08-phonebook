import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//Отправка токена в заголовке Authorization
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    const userInfo = { ...credentials };

    try {
      const { data } = await axios.post(`/users/signup`, userInfo);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    const userInfo = { ...credentials };
    // // console.log(userInfo);
    try {
      const { data } = await axios.post(`/users/login`, userInfo);
      token.set(data.token);

      return data;
    } catch (error) {
      // console.dir(error);
      return rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { getState, rejectWithValue }) => {
    let contacts = getState().phonebook.contacts;
    console.log(contacts);

    try {
      const response = await axios.post(`/users/logout`);
      console.log('response', response);
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getUser = createAsyncThunk('auth/getUser', async (_, thunkApi) => {
  const persistedToken = thunkApi.getState().auth.token;
  axios.defaults.headers.common['Authorization'] = persistedToken;

  if (!persistedToken) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get(`/users/current`);
    // console.log(data);
    return data;
  } catch (error) {
    token.unset();
    return thunkApi.rejectWithValue(error.message);
  }
});

export { signup, login, signOut, getUser };
