import React, { lazy } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './screens/Layout';

const Beranda = lazy(() => import('./screens/Beranda'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
