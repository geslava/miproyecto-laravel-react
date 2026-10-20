
import { useEffect, useState } from 'react'
import './App.css'

const API = 'http://localhost:8000/api'

function App() {
  const [portafolio, setPortafolio] = useState(null)
  const [proyectos, setProyectos] = useState([])
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    async function cargarDatos() {
      try {
        const [respuestaPortafolio, respuestaProyectos] =
          await Promise.all([
            fetch(`${API}/portafolio`),
            fetch(`${API}/proyectos`),
          ])

        if (!respuestaPortafolio.ok || !respuestaProyectos.ok) {
          throw new Error('No fue posible obtener los datos de Laravel.')
        }

        const datosPortafolio = await respuestaPortafolio.json()
        const datosProyectos = await respuestaProyectos.json()

        setPortafolio(datosPortafolio)
        setProyectos(Array.isArray(datosProyectos) ? datosProyectos : [])
      } catch (err) {
        setError(
          'No se pudieron cargar los datos. Verifica que Laravel esté activo.'
        )
        console.error('Error al consultar la API:', err)
      } finally {
        setCargando(false)
      }
    }

    cargarDatos()
  }, [])

  return (
    <div className="app">
      <header className="encabezado">
        <a className="marca" href="#inicio">Mi Portafolio</a>
        <nav>
          <a href="#sobre-mi">Acerca de</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
      </header>

      <main>
        <section className="portada" id="inicio">
          <div className="portada-contenido">
            <p className="etiqueta">DESARROLLO DE SOFTWARE</p>
            <h1>
              Ideas que se convierten en
              <span> soluciones digitales.</span>
            </h1>
            <p className="descripcion">
              {portafolio?.descripcion ||
                'Explora mis proyectos y las tecnologías que utilizo.'}
            </p>
            <a className="boton" href="#proyectos">
              Explorar proyectos ↓
            </a>
          </div>
          <div className="portada-grafico" aria-hidden="true">
            <span>{'{ }'}</span>
            <span className="punto punto-uno"></span>
            <span className="punto punto-dos"></span>
          </div>
        </section>

        <section className="seccion" id="sobre-mi">
          <p className="etiqueta">ACERCA DEL PORTAFOLIO</p>
          <h2>{portafolio?.titulo || 'Mi portafolio de proyectos'}</h2>
          <p className="texto-seccion">
            Un espacio para presentar aplicaciones, soluciones web y proyectos
            de software desarrollados con distintas herramientas tecnológicas.
          </p>
        </section>

        <section className="seccion tecnologias" id="tecnologias">
          <p className="etiqueta">HERRAMIENTAS</p>
          <h2>Tecnologías</h2>
          <div className="lista-tecnologias">
            {(portafolio?.tecnologias || [
              'Laravel', 'React', 'PHP', 'JavaScript', 'MariaDB',
            ]).map((tecnologia) => (
              <span className="tecnologia" key={tecnologia}>
                {tecnologia}
              </span>
            ))}
          </div>
        </section>

        <section className="seccion" id="proyectos">
          <p className="etiqueta">TRABAJO REALIZADO</p>
          <h2>Proyectos</h2>
          <p className="texto-seccion">
            Información obtenida directamente desde la API de Laravel.
          </p>

          {cargando && <p className="estado">Cargando proyectos...</p>}

          {error && <p className="error">{error}</p>}

          {!cargando && !error && proyectos.length === 0 && (
            <p className="estado">Todavía no hay proyectos registrados.</p>
          )}

          <div className="rejilla-proyectos">
            {proyectos.map((proyecto) => (
              <article className="tarjeta" key={proyecto.id}>
                <div className="tarjeta-numero">
                  PROYECTO {String(proyecto.id).padStart(2, '0')}
                </div>
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                {proyecto.estado && (
                  <span className="estado-proyecto">{proyecto.estado}</span>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>{portafolio?.titulo || 'Mi Portafolio'}</p>
        <p>Desarrollado con React y Laravel</p>
      </footer>
    </div>
  )
}

export default App
