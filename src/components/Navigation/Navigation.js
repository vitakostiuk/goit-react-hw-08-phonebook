import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu';
import s from './Navigation.module.css';

export const Navigation = ({ toggleModal }) => {
  return (
    <nav className={s.Navigation}>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.Active : s.Link)}
      >
        Contacts
      </NavLink>
      <div className={s.Wrapper}>
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
        <UserMenu />
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  toggleModal: PropTypes.func,
};
