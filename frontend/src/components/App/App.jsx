import './App.css'
import { Layout } from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App
