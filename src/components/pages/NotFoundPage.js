import ContactsPage from './ContactsPage';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const NotFound = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? <ContactsPage /> : <p>Such page is not exists</p>}</>;
};

export default NotFound;
