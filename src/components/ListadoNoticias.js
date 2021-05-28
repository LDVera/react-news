import React from 'react'
import Noticias from './Noticias'
import PropTypes from 'prop-types'
const ListadoNoticias = ({noticias}) => {
  return (
    <div className="row">
      {noticias.map(noticia => (
        <Noticias
          key={noticia.url}
          noticia={noticia}
        />
  ))}
    </div>
  )
}

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
}

export default ListadoNoticias
