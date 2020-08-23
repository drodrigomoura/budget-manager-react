import React, {useState} from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'


const Formulario = ({setGasto, setCrearGasto}) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  //Cuando el usuario presiona Agregar
  const handleSubmit = e =>{
    e.preventDefault()
    //validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
      setError(true)
      return
    }
    setError(false)

    //construir gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    // console.log(gasto);

    //pasar el gasto al componente pricipal
    setGasto(gasto)
    setCrearGasto(true)

    //resetear form
    setNombre('')
    setCantidad(0)
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Agregar tu gastos aquí</h2>
      { error ? 
        <Error msj="Ambos campos son obligatorios o Presupuesto incorrecto"/>
        : null
      }
      <div className="campo"> 
        <label>Nombre Gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value))}
        />
      </div>
      <input 
        type="submit"
        className="button-primary u-full-width" 
        value="Agregar gasto"
      />
    </form>
  );
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
}

export default Formulario;