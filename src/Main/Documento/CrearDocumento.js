import React from "react";
import { CatalogoService } from "../../Services/Http/Catalogo-service";
import { AreasService } from "src/Services/Http/areas-service";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import ModalBase from "src/components/Modal/ModalBase"


class CrearDocumento extends React.Component{

    state = {}

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            optionsTipoDocumento: [],
            optionsTipoTermino: [],
            subAreas: [],
            form: {
                fechaOficio: "",
                multa: 0,
                anexo: 0,
                idTermino: 1,
                idTipoDocumento: 1,
                turnarAreas: []
            }
        };
        this.setFechaOficio = this.setFechaOficio.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAreaChange = this.handleAreaChange.bind(this)
        this.guardar = this.guardar.bind(this)
    }

    componentDidMount(){
        this.initCatalogs()
    }

    async initCatalogs(){
        try{
            let optionsTipoDocumento = await CatalogoService.tipoDocumento()
            optionsTipoDocumento = optionsTipoDocumento.data
            let optionsTipoTermino = await CatalogoService.termino()
            optionsTipoTermino = optionsTipoTermino.data
            let subAreas = await AreasService.subAreas(1)
            subAreas = subAreas.data
            
            this.setState({
                optionsTipoDocumento,
                optionsTipoTermino,
                subAreas
            })
        }catch(error){
            console.log(error)
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const objValue = this.state.form;
        objValue[name] = value        
        this.setState({form: objValue});
    }

    handleAreaChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let objValue = this.state.form;
        if(value){
            objValue.turnarAreas.push(name)
        }else{
            objValue.turnarAreas = objValue.turnarAreas.filter(item => item !== name)
        }
        this.setState({form: objValue});
    }


    guardar(e){
        e.preventDefault()
        console.log(this.state.form)
        this.setState({showModal: true})
    }

    setFechaOficio(date){
        let form = this.state.form;
        form.fechaOficio = date
        this.setState({form})
    }

    render(){
        return(
            <div className="w-full lg:w-2/3">
                <form className="bg-white rounded"  onSubmit={(e) => {this.guardar(e)}}>
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="w-1/3 mr-5">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="asunto">
                                Asunto
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="asunto"
                                name="asunto"
                                type="text"
                                placeholder="Asunto"
                                required
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="w-1/3 mr-5">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="oficio">
                                Oficio
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="oficio"
                                name="oficio"
                                type="text"
                                placeholder=""
                                required
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="w-1/3">

                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fechaOficio">
                                Fecha Oficio
                            </label>
                            <CustomDatePicker required id="fechaOficio" date={this.state.form.fechaOficio} onChange={this.setFechaOficio} />
                        </div>
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="w-1/3 mr-5">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="idTermino">
                                Remitente
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="remitente"
                                name="remitente"
                                type="text"
                                placeholder=""
                                required
                                onChange={this.handleInputChange}
                                list="mylist"
                            />
                            <datalist id="mylist">
                                <option value="Option 1" />
                                <option value="Option 2" />
                                <option value="Option 3" />
                            </datalist>
                        </div>
                        <div className="w-1/3 mr-5">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="idTermino">
                                Termino
                            </label>
                            <select
                                className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="idTermino"
                                name="idTermino"
                                type="text"
                                required
                                value={this.state.form.idTermino}
                                onChange={this.handleInputChange}
                            >
                                {this.state.optionsTipoTermino.map((option) => (
                                <option key={'slTermino-'+option.idTermino} value={option.idTermino}>{option.termino}</option>
                                ))}
                            </select>
                            <input className="ml-4 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-center mr-2 cursor-pointer"
                                    type="checkbox"
                                    value={this.state.form.multa}
                                    onChange={this.handleInputChange}
                                    name="multa"
                                    id="multa" />
                                <label className="mb-2 text-sm font-bold text-gray-700" htmlFor="multa">
                                    Multa
                                </label>
                        </div>
                        <div className="w-1/3">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="tipoDocumento">
                                Tipo Documento
                            </label>
                            <select
                                className="w-3/4 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="tipoDocumento"
                                name="tipoDocumento"
                                type="text"
                                onChange={this.handleInputChange}
                            >
                                {this.state.optionsTipoDocumento.map((option) => (
                                <option key={'slTDo-'+option.idTipoDocumento} value={option.idTipoDocumento}>{option.tipoDocumento}</option>
                                ))}
                            </select>
                            <input className="ml-3 appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-center mr-2 cursor-pointer"
                                    type="checkbox"
                                    value={this.state.form.anexo}
                                    onChange={this.handleInputChange}
                                    name="anexo"
                                    id="anexo" />
                                <label className="mb-2 text-sm font-bold text-gray-700" htmlFor="anexo">
                                    Anexos
                                </label>
                        </div>
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="w-2/3">
                            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">Descripcion</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm leading-tight text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripcion"></textarea>
                        </div>
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                        <div className="w-2/3">
                            <div className="w-full">
                                Areas a turnar:
                            </div>
                            <div className="w-full">
                                {this.state.subAreas.map((item) => (
                                    <div className="inline-block text-center mr-3 pt-6" key={item.idArea + item.nombreArea}>
                                        <input className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-center mr-2 cursor-pointer"
                                            type="checkbox"
                                            onChange={this.handleAreaChange}
                                            name={item.idArea}
                                            value={item.idArea}
                                            id={item.nombreArea} />
                                        <label className="text-sm font-bold text-gray-700 mr-3" htmlFor={item.nombreArea}>
                                            {item.nombreArea}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="flex justify-center items-center w-full">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-34 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
                    </div>
                    <div className="w-1/2 mt-5">
                        <button
                            className="w-1/3 mr-2 px-2 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                            
                        >
                            Guardar Documento
                        </button>
                        <button
                            className="w-1/3 mr-2 px-2 py-2 font-bold text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
                            type="reset"
                        >
                            Reset
                        </button>
                    </div>
                </form>
                <ModalBase show={this.state.showModal}>Balala</ModalBase>
            </div>
        )
    }
}

export default CrearDocumento;