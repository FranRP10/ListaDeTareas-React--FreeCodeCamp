import React from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario(props){


  const [input, setInput] = useState('')

  const manejarCambio = e =>{
    setInput(e.target.value);
    console.log(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault() // Evita que la pagina se recargue cada vez que se agrega una tarea
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva)
  }


  return(
    <form className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}


export default TareaFormulario