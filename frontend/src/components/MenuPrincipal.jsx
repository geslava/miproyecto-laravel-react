import { NavLink } from "react-router-dom";

const enlaces = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/inclusion", texto: "Inclusión" },
  { ruta: "/sistema-braille", texto: "Sistema Braille" },
  { ruta: "/matematicas", texto: "Matemáticas Aplicadas" },
  { ruta: "/computacion", texto: "Computación" },
  { ruta: "/adquisiciones", texto: "Materiales | Adquisiciones" },
  { ruta: "/cursos", texto: "Cursos" },
  { ruta: "/agradecimientos", texto: "Agradecimientos" },
  { ruta: "/contacto", texto: "Contacto" },
];

export default function MenuPrincipal() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav">
      <div className="container-fluid">

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Mostrar menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="menuPrincipal"
        >
          <ul className="navbar-nav text-center">
            {enlaces.map((enlace) => (
              <li className="nav-item" key={enlace.ruta}>
                <NavLink
                  to={enlace.ruta}
                  end={enlace.ruta === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
