import './App.css'
import { Layout } from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../../pages/Catalog/Catalog';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App
