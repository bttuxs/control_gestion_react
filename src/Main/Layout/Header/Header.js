import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header className="flex h-20 items-center p-4 text-semibold text-gray-100 bg-blue-900 md:order-2">
                Control de Gestion
                <div className="flex absolute top-3 right-1 r-0 p-1">
                    <button type="button" className="mr-4 text-sm md:mr-0 cursor-pointer" aria-expanded="false">
                        <img className="w-10 h-10 " src="/assets/icons/exit.svg" alt="user photo" />
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;