import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import UserMenu from '../UserMenu';
import s from './Navigation.module.css';

export const Navigation = ({ toggleModal }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <nav className={s.Navigation}>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.Active : s.Link)}
      >
        Contacts
      </NavLink>
      <div className={s.Wrapper}>
        {!isLoggedIn && (
          <>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? s.Active : s.Link)}
              onClick={toggleModal}
            >
              Register
            </NavLink>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? s.Active : s.Link)}
              onClick={toggleModal}
            >
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && <UserMenu useremail={userEmail ?? ''} />}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  toggleModal: PropTypes.func,
};
