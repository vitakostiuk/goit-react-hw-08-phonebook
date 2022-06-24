import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';
import s from './StylesModalForm.module.css';

const LoginPage = ({ toggleModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };

    dispatch(authOperations.login(credentials));
  };

  useEffect(() => {
    if (!error) return;
    alert('Invalid email!');
  }, [error]);

  useEffect(() => {
    if (userEmail) {
      alert('You are enter into your profile!');
      toggleModal();
    }
  }, [toggleModal, userEmail]);

  const isBtnDisabled = loading || !email || !password;

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

        <button type="submit" className={s.FormBtn} disabled={isBtnDisabled}>
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
