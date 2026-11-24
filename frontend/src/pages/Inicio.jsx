
import "../styles/Estilos1.css";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <main id="index" className="container-fluid px-2 px-md-4">

      {/* CARRUSEL DE IMÁGENES */}
      <div className="carrusel">
        <div className="carrusel-track">
          <img src="/portal/img/lee_Braille.png" alt="Lectura Braille" />
          <img src="/portal/img/profes-Braille.jpg" alt="Profesores Braille" />
          <img src="/portal/img/progra-MAC.jpg" alt="Programación MAC" />
          <img src="/portal/img/leecTactil.png" alt="Lectura táctil" />
        </div>
      </div>

      <h1>
        Aprende Braille desde el enfoque de las Matemáticas
        <br />
        Aplicadas y Computación
      </h1>

      {/* PRESENTACIÓN */}
      <div className="hero">
        <div className="hero-text">
          <p>
            Un espacio diseñado para fortalecer el aprendizaje del
            Sistema Braille mediante recursos interactivos, materiales
            didácticos, actividades, cursos y herramientas tecnológicas
            orientadas al estudio de las Matemáticas Aplicadas y la
            Computación.
          </p>

            <button class="navbar-toggler ms-auto" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuPrincipal"
                aria-controls="menuPrincipal"
                aria-expanded="false"
                aria-label="Mostrar menú">
                <span class="navbar-toggler-icon"></span>
            </button>

          <Link to="/sistema-braille" className="boton">
            Comenzar
          </Link>
        </div>

        <div>
          <img
            className="estilo-img"
            src="/portal/img/caminata.png"
            alt="Educación"
          />
        </div>
      </div>

      {/* OBJETIVO */}
      <section>
        <h2>Objetivo del Portal</h2>

        <p className="texto-principal">
          Promover el aprendizaje del Sistema Braille desde una
          perspectiva interdisciplinaria que integre las Matemáticas
          Aplicadas y la Computación, ofreciendo recursos educativos
          accesibles que favorezcan la inclusión, el desarrollo del
          pensamiento lógico y el uso de tecnologías digitales.
        </p>
      </section>

      {/* ANTECEDENTES */}
      <section>
        <h2>Antecedentes</h2>

        <p className="texto-principal">
          Todas las personas tienen derecho a la educación. Para hacer
          efectivo este derecho, quienes presentan discapacidad visual
          requieren aprender a leer y escribir a través del Sistema
          Braille, recurso fundamental que les permitirá acceder al
          conocimiento y participar plenamente en la vida, en todos los
          aspectos, personal, educativo y laboral.

          <br /><br />

          A través de este portal y como parte de un esfuerzo de
          difusión, se busca sensibilizar a la comunidad sobre la
          importancia de aprender la lectoescritura Braille. Ello
          permitirá enseñarlo a quienes lo necesiten, impulsar la
          creación de materiales en relieve en diversas áreas del
          conocimiento incluidas las Matemáticas, Computación, Química,
          Filosofía, Economía, por mencionar algunas, o bien participar
          en la revisión de materiales ya existentes.
        </p>
      </section>

      {/* ACCESIBILIDAD */}
      <section id="accesibilidad" className="seccion">
        <h2>Accesibilidad</h2>
        <div className="linea"></div>

        <div className="accesibilidad-columnas">

          {/* SENSIBILIZACIÓN */}
          <div className="columna-accesibilidad">
            <div className="imagen-centro">
              <img
                src="/portal/img/progra-MAC.jpg"
                alt="Braille-MAC"
              />
            </div>

            <h3 className="barra">Sensibilización</h3>

            <div className="texto">
              <p>
                En la sociedad actual, la inclusión de las personas
                en situación de discapacidad representa un desafío y
                con la idea de enfrentarlo, una alternativa será
                propiciar oportunidades para recibir una sólida
                educación integral que los faculte para lograr una
                plena integración social.
              </p>

              <p>
                La sensibilización y la eliminación de barreras
                físicas, tecnológicas y actitudinales son aspectos
                trascendentales que garantizan la plena participación.
                Además, el desarrollo de recursos tiflotécnicos,
                materiales accesibles y políticas públicas inclusivas
                contribuyen significativamente a la autonomía.
              </p>
            </div>
          </div>

          {/* SISTEMA BRAILLE */}
          <div className="columna-accesibilidad">
            <div className="imagen-centro">
              <img
                src="/portal/img/profes-Braille.jpg"
                alt="Profesores de Braille"
              />
            </div>

            <h3 className="barra">Sistema Braille</h3>

            <div className="texto">
              <p>
                El Sistema Braille es un recurso del que se dispone
                para la comunicación escrita de manera táctil,
                integrado por tres series, que utiliza un código en
                relieve creado por el pedagogo francés Louis Braille
                en 1825.
              </p>

              <p>
                El primer paso consiste en darlo a conocer a la
                sociedad y una forma de hacerlo es a través de este
                recurso que infiere las pautas de construcción
                plasmadas en el alfabeto latino para extrapolarlas a
                las ciencias duras y dejar asentadas las bases para
                que la cecografía pueda soportar una notación o
                Signografía Matemática Universal.
              </p>
            </div>
          </div>

        </div>

        {/* VIDEO */}
        <div className="video-centro">
          <video controls>
            <source
              src="/portal/video/VideoBrailleMac.mp4"
              type="video/mp4"
            />
            Este navegador no soporta la reproducción de vídeo.
          </video>
        </div>

        <p>
          Promover una cultura de respeto y empatía hacia la diversidad
          funcional permite construir comunidades más solidarias y
          comprometidas con los derechos humanos.
        </p>
      </section>

      {/* TARJETAS */}
      <section>
        <h2>¿Qué encontrarás?</h2>

        <div className="cards">

          <Link to="/inclusion" className="card-link">
            <div className="card">
              <h3>♿ Inclusión</h3>
              <p>
                Recursos para fomentar la accesibilidad y la educación
                inclusiva.
              </p>
            </div>
          </Link>

          <Link to="/sistema-braille" className="card-link">
            <div className="card">
              <h3>📘 Sistema Braille</h3>
              <p>
                Historia, estructura, alfabeto, números, signos
                especiales y escritura matemática.
              </p>
            </div>
          </Link>

          <Link to="/matematicas" className="card-link">
            <div className="card">
              <h3>➗ Matemáticas Aplicadas</h3>
              <p>
                Representación de expresiones matemáticas, álgebra,
                cálculo y notación científica en Braille.
              </p>
            </div>
          </Link>

          <Link to="/computacion" className="card-link">
            <div className="card">
              <h3>💻 Computación</h3>
              <p>
                Programación accesible, algoritmos, estructuras de
                datos y codificación utilizando Braille.
              </p>
            </div>
          </Link>

          <Link to="/adquisiciones" className="card-link">
            <div className="card">
              <h3>📚 Materiales | Adquisiciones</h3>
              <p>
                Recursos para fomentar la accesibilidad y la educación
                inclusiva.
              </p>
            </div>
          </Link>

          <Link to="/cursos" className="card-link">
            <div className="card">
              <h3>🎓 Cursos</h3>
              <p>
                Cursos, ejercicios, videos, evaluaciones y material
                descargable.
              </p>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}
