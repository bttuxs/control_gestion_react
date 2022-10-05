import React from "react";
import { AreasService } from "src/Services/Http/areas-service";
import { NotificationContext } from "src/Provider/Notification/NotificactionContextProvider";

class FormAreas extends React.Component{

    state = {}
    static contextType = NotificationContext

    constructor(props){
        super(props)
        this.state = {
            form: {
                nombreArea: "",
                idAreaPadre: 0
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const objValue = this.state.form;
        objValue[name] = value        
        this.setState({form: objValue});
    }

    async guardarArea(e){
        e.preventDefault()
        this.context.setGlobalSpinner(true)
        try{
            let dataForm = this.state.form
            const response = AreasService.crear(dataForm)
            console.log(dataForm, response)
            this.props.reload()
            this.context.setGlobalSpinner(false)
            this.context.setGlobalAlert({show: true, message: 'Guardado exitoso', type: 'success'})
            e.target.reset();
        }catch(error){
            this.context.setGlobalSpinner(false)
            this.context.setGlobalAlert({show: true, message: 'Ocurrio un error valide e intente de nuevo', type: 'error'})
        }
    }

    render(){
        return(
            <div className="w-3/4 px-4 py-6">
                <form className="bg-white rounded" onSubmit={(e) => this.guardarArea(e)}>
                    <div className="mb-4 md:flex">
                        <div className="w-1/3 mr-5">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombreArea">
                                Nombre Area
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="nombreArea"
                                name="nombreArea"
                                type="text"
                                placeholder=""
                                required
                                autoComplete="false"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="w-1/3 mr-5">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="idAreaPadre">
                                Pertence
                            </label>
                            <select
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="idAreaPadre"
                                name="idAreaPadre"
                                required
                                onChange={this.handleInputChange}
                            >
                                <option value="0"></option>
                                {this.props.options.map((option) => (
                                    <option key={'slOpt-'+option.idArea} value={option.idArea}>{option.nombreArea}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <button
                            className="w-1/3 mr-2 px-2 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Guardar Area
                        </button>
                        <button
                            className="w-1/3 mr-2 px-2 py-2 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                            type="reset"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormAreas;