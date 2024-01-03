import React, {useState} from "react";
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';




function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    return(
        <>
            <TareaFormulario/>
            <div className="tareas-lista-contenedor">
                Lista de tareas
            </div>
        </>
    )
}


export default ListaDeTareas;