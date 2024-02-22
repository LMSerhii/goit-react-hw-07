import { Toaster } from 'react-hot-toast';
import AddContact from '../components/AddContact/AddContact';
import Aside from '../components/Aside/Aside';
import Main from '../components/Main/Main';
import SearchBox from '../components/SearchBox/SearchBox';
import Loading from '../components/Loading/Loading';
import ContactList from '../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import Error from '../components/Error/Error';
import HomeLayout from '../components/HomeLayout/HomeLayout';

export default function Home() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <HomeLayout>
      <Aside>
        <SearchBox />
        <AddContact />
      </Aside>
      <Main>
        {isLoading && !error && <Loading />}
        {error && <Error>{error}</Error>}
        {!isLoading && !error && <ContactList />}
      </Main>
      <Toaster />
    </HomeLayout>
  );
}
