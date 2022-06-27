import ContactsPage from './ContactsPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const NotFound = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? <ContactsPage /> : <p>Such page is not exists</p>}
      <ToastContainer />
    </>
  );
};

export default NotFound;
