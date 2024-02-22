import { Toaster } from 'react-hot-toast';
import Title from './Titile/Title';
import Layout from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Aside from './Aside/Aside';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selectors';
import Main from './MainComponent/MainComponent';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Aside>
        <Title>Phonebook</Title>
        <SearchBox />
        <ContactForm />
      </Aside>
      <Main>
        {isLoading && !error && <p>Loading ...</p>}
        {error && error}
        {!isLoading && !error && <ContactList />}
      </Main>
      <Toaster />
    </Layout>
  );
}
