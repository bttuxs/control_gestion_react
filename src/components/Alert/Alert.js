import React from 'react';
import { NotificationContext } from '../../Provider/Notification/NotificactionContextProvider'


class Alert extends React.Component{
    static contextType = NotificationContext
    timeOut = null
    alertSelect = ""
    typeAlert = {
        success : "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800",
        info: "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
        error: "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800",
    }

    constructor(props){
        super(props)
        this.state = {
            show: true,
            type: "success",
            message: ""
        }
        this.visible = this.visible.bind(this)
        this.alertSelect = this.typeAlert.info
    }

    visible(show){
        this.setState({show})
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps)
        if(!nextProps.show){
            this.startCount()
        }
        if(nextProps.type){
            this.alertSelect = this.typeAlert[nextProps.type];
        }
    }

    startCount(){
        setTimeout(() => {
            this.setState({show: true})
        }, 5000)
    }

    render(){
        return <div hidden={this.state.show} className={"transition duration-150 ease-out float absolute p-4 mb-4 text-sm rounded-lg "+this.alertSelect} role="alert">
        <span className="font-medium">{this.state.message}</span>
      </div>
    }
}
export default Alert;