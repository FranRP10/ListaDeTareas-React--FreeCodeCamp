import React, {useState} from "react";
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";



function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);  


    const agregarTarea = tarea => {
        

        if(tarea.texto.trim()){ // verifica que el texto no este vacio
            tarea.texto = tarea.texto.trim() // Quita los espacios del principio o final de una cadena de caracteres
          
            const tareasActualizadas = [tarea, ...tareas] //hace que la tarea que se agrega, se agregue al principio del array (La lista en este caso)
            setTareas(tareasActualizadas) // Permite actualizar las tareas (agregar en este caso)
        }
    }

        

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas) // Permite actualizar las tareas (elmininar en este caso)
    }
    

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }

    return(
        <>
            <TareaFormulario onSubmit ={agregarTarea}/>
            
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>   //Map va a crear un componente para cada tarea
                        <Tarea
                        key={tarea.id}
                        id={tarea.id} //Tambien debemos pasar id, ya que key no puede pasarse como prop
                        texto = {tarea.texto}
                        completada ={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                        />
                    )
                }
                
            </div>
            
        </>
    )
}


export default ListaDeTareas;