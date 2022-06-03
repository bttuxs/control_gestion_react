import React, { useState, createContext } from 'react'

export const NotificationContext = createContext();
const configAlert = {
    active: false,
    message: '',
    type: 'info'
}
const NotificationContextProvider = (props) => {
    const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)
    const [isGlobalAlertOn, setGlobalAlert] = useState(configAlert)

    return (
        <NotificationContext.Provider value={{isGlobalSpinnerOn, setGlobalSpinner, isGlobalAlertOn, setGlobalAlert}}>
            {props.children}
        </NotificationContext.Provider>
      )
}


export default NotificationContextProvider;