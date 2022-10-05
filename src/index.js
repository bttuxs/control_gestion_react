import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotificationContextProvider from './Provider/Notification/NotificactionContextProvider';
import Loader from 'src/components/Loader/Loader';
import Alert from 'src/components/Alert/Alert';
import LoaderStatic from 'src/components/Loader/LoaderStatic';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import RouterMain from './Main/MainRouter';

library.add(fas)

const LoginComponent = React.lazy(() => import('./Login/Login'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NotificationContextProvider>
      <Loader />
      <Alert />
      <React.Suspense fallback={<LoaderStatic />}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginComponent />} />
            { RouterMain }
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </NotificationContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
