import './Login.css';
import { http } from '../Services/Http/Login-service'
import React from 'react';
import { Navigate } from 'react-router-dom'

import {NotificationContext} from '../Provider/Notification/NotificactionContextProvider'

class Login extends React.Component{
    static contextType = NotificationContext
    state = {
        authLogin: false
    }
    render() {
        const { authLogin } = this.state;
        if(!authLogin){
            return this.login()
        }else{
            return <Navigate to='/main' />
        }
    }

    async getUsers(e){
        this.context.setGlobalSpinner(true)
        try{
            let data = await http.get();
            console.log(data)
            this.context.setGlobalSpinner(false)
            this.setState({authLogin: true})
        }catch(error){
            this.context.setGlobalSpinner(false)
            this.context.setGlobalAlert({active: true, message: 'Error en la comunicacion', type: 'error'})
        }
        return false;        
    }

    login(){
        return <div >
            <div className="min-h-full flex items-center justify-center py-12 px-8 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-10">
                <div>
                <img className="mx-auto h-20 w-auto" src="/assets/icons/workflow.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Control de Gestion</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">Usuario</label>
                    <input id="email-address" name="email" type="text" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Usuario" />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                </div>
                <div>
                    <button type="button" onClick={(e) => this.getUsers(e)} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-5">
                        <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                    Entrar
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>;
    }
}

export default Login;
