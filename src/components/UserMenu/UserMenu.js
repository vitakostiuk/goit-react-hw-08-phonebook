import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

const UserMenu = ({ useremail }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // console.log(useSelector());

  const handleSignOut = () => {
    dispatch(authOperations.signOut());
  };

  return (
    <div className={s.Container}>
      <span>
        <FaUserCircle color="#ffffff" size="24" />
      </span>
      <p className={s.Link}>{useremail}</p>
      {isLoggedIn && (
        <button type="button" className={s.FormBtn} onClick={handleSignOut}>
          Sign Out
        </button>
      )}
    </div>
  );
};

UserMenu.propTypes = {
  useremail: PropTypes.string.isRequired,
};

export default UserMenu;
