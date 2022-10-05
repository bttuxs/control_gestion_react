import React from "react";
import { Outlet } from "react-router-dom"

class MainAdmin extends React.Component{

    render(){
        return(
            <Outlet></Outlet>
        )
    }
}

export default MainAdmin;