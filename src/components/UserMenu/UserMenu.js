import { FaUserCircle } from 'react-icons/fa';
import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.Container}>
      <span>
        <FaUserCircle color="#ffffff" size="24" />
      </span>
      <p className={s.Link}>Email</p>
      <button type="button" className={s.FormBtn}>
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
