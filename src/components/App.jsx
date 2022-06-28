import { BallTriangle } from 'react-loader-spinner';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
// import ContactForm from './ContactForm';
import { Container } from './Container';
import Modal from './Modal';
// import Contacts from './pages/Contacts';
// import NotFound from './pages/NotFoundPage';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
import { Header } from './Header';
// import s from '../components/App.module.css';

//  ДИНАМИЧЕСКИЙ ИМПОРТ
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: 'ContactsPage' */)
);
const NotFound = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */)
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: 'RegisterPage' */)
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'LoginPage' */)
);

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const isLoadingUser = useSelector(authSelectors.getLoadingUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (isLoadingUser) {
    return (
      <BallTriangle
        height="50"
        width="50"
        color="#0077ff"
        ariaLabel="loading"
      />
    );
  }

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Container>
        <Suspense
          fallback={
            <BallTriangle
              height="50"
              width="50"
              color="#0077ff"
              ariaLabel="loading"
            />
          }
        >
          <Routes>
            {/* AUTH */}
            <Route
              path="/"
              element={
                !isLoggedIn ? (
                  <Navigate to="/login" replace />
                ) : (
                  <ContactsPage />
                )
              }
            ></Route>

            {/* NOT AUTH */}
            <Route
              path="/register"
              element={
                isLoggedIn ? (
                  <Navigate to="/contacts" replace />
                ) : (
                  showModal && (
                    <Modal>
                      <RegisterPage toggleModal={toggleModal} />
                    </Modal>
                  )
                )
              }
            ></Route>
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/contacts" replace />
                ) : (
                  showModal && (
                    <Modal>
                      <LoginPage toggleModal={toggleModal} />
                    </Modal>
                  )
                )
              }
            ></Route>

            <Route
              path="*"
              element={
                <Container>
                  <NotFound />
                </Container>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
