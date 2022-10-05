import React from "react";
import { Outlet } from "react-router-dom"

class MainDocumento extends React.Component{

    render(){
        return(
            <Outlet></Outlet>
        )
    }
}

export default MainDocumento;