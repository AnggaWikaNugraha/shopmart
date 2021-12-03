import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './screens/Layout';
import { Provider } from 'react-redux';
import store from "../src/redux/store";
import { GuardOnlyLogin } from './utils/GuardOnlyLogin';

const Beranda = lazy(() => import('./screens/Beranda'));
const Carts = lazy(() => import('./screens/carts'))
const Login = lazy(() => import('./screens/Login'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Beranda />} />
              <Route path='/carts' element={<GuardOnlyLogin component={Carts} />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
