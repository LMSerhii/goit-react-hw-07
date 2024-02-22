import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import Loading from './Loading/Loading';
import Layout from './Layout/Layout';
import { fetchContacts } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import NotFound from '../pages/NotFound';

const Home = lazy(() => import('../pages/Home'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
