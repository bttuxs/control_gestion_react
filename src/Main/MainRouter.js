import React from "react";
import { Route } from "react-router-dom";
import RouterAdmin from './Admin/RouterAdmin';
import RouterDocumuentos from "./Documento/RouterDocumento";

const MainComponent = React.lazy(() => import('./Main'));
const DashboardComponent = React.lazy(() => import('./Dashboard/Dashboard'));

const RouterMain = (            
    <Route exact path="/main" element={<MainComponent />}>
        <Route exact path="" element={<DashboardComponent />} />
        { RouterDocumuentos }
        { RouterAdmin }
    </Route>)

export default RouterMain;
