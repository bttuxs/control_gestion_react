import React from "react";
import { Route } from "react-router-dom";
  
const AdministratorComponent = React.lazy(() => import('./Administration'));
const MainAdminComponent = React.lazy(() => import('./MainAdmin'));
const AreaAdminComponent = React.lazy(() => import('./Areas/Areas'))

const RouterAdmin = (<Route exact path="admin" element={<MainAdminComponent />}>
                        <Route exact path="" element={<AdministratorComponent />} />
                        <Route exact path="areas" element={<AreaAdminComponent />} />
                    </Route>)

export default RouterAdmin;
