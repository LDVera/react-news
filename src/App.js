import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PropTypes from 'prop-types'
import ListadoNoticias from './components/ListadoNoticias'


function App() {

  const [Categoria, setCategoria] = useState('')
  const [Noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${Categoria}&apiKey=c3f000b8364043068f92ec6d8138da04`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json()

      setNoticias(noticias.articles)
    }
    consultarApi()
  }, [Categoria])

  return (
    <Fragment>
      <Header 
        title="buscador de noticias"
      />

      <div className="container white">
        <Form
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={Noticias}
        />
      </div>
    </Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default App;
