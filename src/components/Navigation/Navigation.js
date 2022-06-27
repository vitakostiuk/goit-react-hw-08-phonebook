import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import UserMenu from '../UserMenu';
import s from './Navigation.module.css';

export const Navigation = ({ toggleModal }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);

  const handleClickContats = () => {
    if (!isLoggedIn) {
      toast.error('Register or login and try again!');
    }
  };

  return (
    <>
      <nav className={s.Navigation}>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? s.Active : s.Link)}
          onClick={handleClickContats}
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
      <ToastContainer />
    </>
  );
};

Navigation.propTypes = {
  toggleModal: PropTypes.func,
};
