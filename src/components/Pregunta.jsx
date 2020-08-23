import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types'
import Error from './Error'


const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {
  //definir el state
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  //funcion que lee el presupuesto
  const handleChange = e =>{
    setCantidad(parseInt(e.target.value, 10))
  }

  //submit para definir el presupuesto
  const handleSubmit = e =>{
    e.preventDefault()

    //validar
    if(cantidad < 1 || isNaN(cantidad)){
      setError(true)
      return
    }

    //si pasa la validacion
    setError(false)
    setPresupuesto(cantidad)
    setRestante(cantidad)
    setMostrarPregunta(false)
  }
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      { error ? <Error msj="El presupuesto es incorrecto"/> : null}
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
        />

        <input 
          type="submit"
          className="button-primary u-full-width" 
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
}

export default Pregunta;