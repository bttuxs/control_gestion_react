import React from "react";
import { FormatoFecha } from "src/Services/formato/fecha";

class TablaAreas extends React.Component{
    constructor(props){
        super(props)
        this.getHeaders = this.getHeaders.bind(this)
    }

    getHeaders(headers){
        let header = []
        for(let x=0; x< headers.length; x++){
            const keyValue = headers[x]["label"];
            header.push(<th key={x+keyValue} scope="col" className="px-6 py-3">
                { keyValue }
            </th>)
        }
        return header;
    }

    formatValue(value, format){
        switch (format) {
            case "fecha":
                value = FormatoFecha.formato(value)
                break;
        
            default:
                break;
        }
        return value
    }

    formatData(info){
        const data = info.data;
        const headers = info.headers;
        const rows = [];
        for(let x=0; x < data.length; x++){
            const cols = []
            for(let h=0; h < headers.length; h++){
                const key = headers[h]["key"]
                const value = this.formatValue(data[x][key], headers[h]["tipo"])
                cols.push(<td key={x+"-"+h+key} className="px-6 py-4 dark:text-white whitespace-nowrap">
                    { value }
                </td>)
            }
            rows.push(<tr key={"row-"+x} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                { cols }
            </tr>)
        }
        return rows
    }

    render(){
        const tableHeader = this.getHeaders(this.props.headers);
        const data = this.formatData(this.props);
        return(
        <table className="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    { tableHeader }
                </tr>
            </thead>
            <tbody>
                { data }
            </tbody>
        </table>
        )
    }
}

export default TablaAreas;