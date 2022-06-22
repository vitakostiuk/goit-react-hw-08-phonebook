import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './StylesModalForm.module.css';
import { authOperations } from 'redux/auth';

const RegisterPage = ({ toggleModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { name, email, password };

    dispatch(authOperations.signup(credentials));
  };

  return (
    <div>
      <form className={s.ContactForm} onSubmit={handleSubmit}>
        <div className={s.InputWrapper}>
          <label className={s.Label}>
            Name
            <input
              className={s.Input}
              value={name}
              type="text"
              placeholder="Brad Pitt"
              required
              onChange={e => setName(e.target.value)}
              onClick={toggleModal}
            />
          </label>
        </div>

        <div className={s.InputWrapper}>
          <label className={s.Label}>
            Email
            <input
              className={s.Input}
              value={email}
              type="text"
              placeholder="email@mail.com"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className={s.InputWrapper}>
          <label className={s.Label}>
            Password
            <input
              className={s.Input}
              value={password}
              type="text"
              placeholder="qwerty1234"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className={s.FormBtn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

RegisterPage.propTypes = {
  toggleModal: PropTypes.func,
};

export default RegisterPage;
