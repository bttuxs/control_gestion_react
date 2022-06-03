import './Main.css';
import React from 'react';
import {
    Outlet,
} from "react-router-dom";
import Sidebar from './Layout/Sidebar/Sidebar'
import Header from './Layout/Header/Header'

class Main extends React.Component{

    render(){
        return <div className="flex overflow-x-hidden h-screen">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    <main className="p-4">
                        <Outlet />
                    </main>
                </div>
            </div>
    }
}

export default Main;