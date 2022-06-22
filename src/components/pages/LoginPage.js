import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './StylesModalForm.module.css';

const LoginPage = ({ toggleModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={s.ContactForm} onSubmit={handleSubmit}>
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

LoginPage.propTypes = {
  toggleModal: PropTypes.func,
};

export default LoginPage;
