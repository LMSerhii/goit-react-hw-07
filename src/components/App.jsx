import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Title from './Titile/Title';
import Layout from './Layout/Layout';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Aside from './Aside/Aside';
import Main from './Main/Main';
import Loading from './Loading/Loading';
import Error from './Error/Error';
import AddContact from './AddContact/AddContact';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Aside>
        <Title />
        <SearchBox />
        <AddContact />
      </Aside>
      <Main>
        {isLoading && !error && <Loading />}
        {error && <Error>{error}</Error>}
        {!isLoading && !error && <ContactList />}
      </Main>
      <Toaster />
    </Layout>
  );
}
