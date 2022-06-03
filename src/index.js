import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/Login'
import Main from './Main/Main'
import Dashboard from './Dashboard/Dashboard';
import CrearDocumento from './Documento/CrearDocumento'
import LoaderContextProvider from './Provider/Notification/NotificactionContextProvider' 
import NotificationContextProvider from './Provider/Notification/NotificactionContextProvider';
import Loader from './components/Loader/Loader';
import Alert from './components/Alert/Alert';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <Loader />
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />}>
            <Route path="" element={<Dashboard />} />
            <Route path="crear" element={<CrearDocumento />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotificationContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
