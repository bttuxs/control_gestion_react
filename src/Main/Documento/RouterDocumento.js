import React from "react";
import { Route } from "react-router-dom";
  
const MainDocumentosComponents = React.lazy(() => import('./MainDocumento'))
const CrearDocumentoComponent = React.lazy(() => import('./CrearDocumento'))

const RouterDocumuentos = (<Route exact path="documentos" element={<MainDocumentosComponents />}>
                        <Route exact path="crear" element={<CrearDocumentoComponent />} />
                    </Route>)

export default RouterDocumuentos;
