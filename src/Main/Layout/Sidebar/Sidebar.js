import React from 'react'

class Sidebar extends React.Component{
    render (){
        return (<aside className="flex-shrink-0 w-60 flex flex-col transition-all duration-300">
        <div className="flex h-20 bg-blue-900 grid content-center justify-center">
            <div className='text-gray-100 align-center'>
                <img className="mx-auto h-20" src="/assets/icons/workflow-logo.svg" alt="Workflow" />
            </div>
        </div>
        <nav className="flex-1 flex flex-col bg-white border-r border-r-grey-100">
            <a href="#" className="p-2">Nav Link 1</a>
            <a href="#" className="p-2">Nav Link 2</a>
            <a href="#" className="p-2">Nav Link 3</a>
        </nav>
    </aside>)
    }
}

export default Sidebar;