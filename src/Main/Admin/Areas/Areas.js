import React from "react";
import { AreasService } from "src/Services/Http/areas-service";
import TablaAreas from "./TablaAreas";
import FormAreas from "./FormArea";

class Areas extends React.Component{

    constructor(props) {
        super(props);
        this.getAreas = this.getAreas.bind(this)

        this.state = {listarAreas: []};
      }

    componentDidMount(){
        this.getAreas()
    }

    async getAreas(){
        try{
            let listarAreas = await AreasService.listAreas()
            listarAreas.data = listarAreas.data.map(item => { return {...item.Areas, ...{padre: item.Padre?.nombreArea?item.Padre?.nombreArea:''}}})
            this.setState({listarAreas: listarAreas.data})
        }catch(e){
            console.log(e)
        }
    }

    render(){
        let header = [
            { key: "nombreArea", label: "Area" },
            { key: "padre", label: "Area superior"},            
            { key: "creado", label: "creado", tipo: "fecha" },
            { key: "actualizado", label: "actualizado", tipo: "fecha" },
        ];
        return(
            <div>
                <FormAreas options={ this.state.listarAreas } reload={this.getAreas} />
                <TablaAreas headers={header} data={ this.state.listarAreas }></TablaAreas>
            </div>
        )
    }
}

export default Areas;