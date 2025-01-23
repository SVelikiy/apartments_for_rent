import './App.css'
import { Layout } from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ApartmentList from '../ApartmentList/ApartmentsList'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<ApartmentList />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App
