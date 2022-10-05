import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

class Administration extends React.Component{

    render(){
        let items = [];
        let menu = [
            {name: "Areas", icon: "sitemap", link: "/main/admin/areas"},
            {name: "Usuarios", icon: "users", link: "/main/admin/usuario"}
        ];
        for(let i = 0;  i < menu.length; i++){
            let info = menu[i];
            items.push(
                <Link to={info.link} key={"link"+i} >
                    <div className="p-2 m-2 h-44 rounded-lg shadow bg-blue-100 w-40 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="p-6 w-full h-20 text-center items-center text-blue-500 rounded-full">
                            <FontAwesomeIcon size="3x" icon={['fa', info.icon]}  className="items-center text-blue-500" />
                        </div>
                        <div className="p-2 w-full h-20 flex items-center">
                            <p className="text-center text-lg font-semibold text-gray-700">
                                {info.name}
                            </p>
                        </div>
                    </div>
                </Link>)
        }
        return(
            <div className="flex">
                {items}
            </div>            
        )
    }
}

export default Administration;