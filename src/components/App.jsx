import { Toaster } from 'react-hot-toast';
import Title from './Titile/Title';
import Layout from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Toaster />
    </Layout>
  );
}
