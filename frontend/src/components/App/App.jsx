import "./App.css";
import { Layout } from "../Layout/Layout";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const NotFoundPage = lazy(() => import("../NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
