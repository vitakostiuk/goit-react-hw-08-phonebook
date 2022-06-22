import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Container } from './Container';
import Modal from './Modal';
// import Contacts from './pages/Contacts';
// import NotFound from './pages/NotFoundPage';
// import RegisterPage from './pages/RegisterPage';
// import LoginPage from './pages/LoginPage';
import { Header } from './Header';
import s from '../components/App.module.css';

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Container>
        <>
          <h2 className={s.Title}>Phonebook</h2>
          <ContactForm />
        </>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ContactsPage />}></Route>

            <Route
              path="/register"
              element={
                showModal && (
                  <Modal onKeyDown={toggleModal}>
                    <RegisterPage />
                  </Modal>
                )
              }
            ></Route>

            <Route
              path="/login"
              element={
                showModal && (
                  <Modal onKeyDown={toggleModal}>
                    <LoginPage />
                  </Modal>
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
