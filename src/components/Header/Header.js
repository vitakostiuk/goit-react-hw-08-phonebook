import PropTypes from 'prop-types';
import { Navigation } from '../Navigation';
import s from './Header.module.css';

export const Header = ({ toggleModal }) => {
  return (
    <div className={s.Header}>
      <Navigation toggleModal={toggleModal} />
    </div>
  );
};

Navigation.propTypes = {
  toggleModal: PropTypes.func,
};
