
export default function PiePagina() {
  return (
    <>
        
        <div className="contenedor">
        <img
            src="/portal/img/unam-escudo-azul.webp"
            alt="Escudo de la UNAM"
        />
        </div>
        <div className="lema">
            "POR MI RAZA HABLARÁ EL ESPÍRITU"
        </div>

      <footer>
        <strong>Hecho en México</strong>, todos los derechos reservados
        <br />
        © <strong>2026</strong> Portal Educativo • Sistema Braille.
        El enfoque de las Matemáticas Aplicadas y Computación
        <br />
        Esta página puede ser reproducida con fines no lucrativos,
        siempre y cuando no se mutile, se cite la fuente completa y
        su dirección electrónica. De otra forma, requiere permiso
        previo por escrito de la institución.
      </footer>

      <a
        href="#"
        className="top-btn"
        aria-label="Regresar al inicio de la página"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="fa-solid fa-circle-chevron-up"></span>
        <span>Arriba</span>
      </a>
    </>
  );
}
