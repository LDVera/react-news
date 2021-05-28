import React from 'react'
import styles from './Form.module.css'
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect'

const Form = ({setCategoria}) => {

  const OPCIONES = [
    {value: 'general', label: 'GENERAL'},
    {value: 'business', label: 'NEGOCIOS'},
    {value: 'entertainment', label: 'ENTRETENIMIENTO'},
    {value: 'healt', label: 'SALUD'},
    {value: 'science', label: 'CIENCIA'},
    {value: 'sports', label: 'DEPORTES'},
    {value: 'technology', label: 'TECNOLOGIA'}
  ]
  const [categoria, SelectNoticias ] = useSelect('general', OPCIONES)

  const buscarNoticia = e => {
    e.preventDefault();
    setCategoria(categoria)
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticia}
        >
          <h2 className={styles.heading}>encuentra noticias por categoria</h2>
          <SelectNoticias />
          <div className="input-field">
            <input 
              type="submit" 
              className={`${styles.btn_block} btn-large amber darker-2`}  
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

export default Form
