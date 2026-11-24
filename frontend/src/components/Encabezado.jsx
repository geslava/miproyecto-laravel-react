export default function Encabezado() {
  return (
    <header className="site-header">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">

          <div className="col-auto logo-sitio">
            <img
              src="/portal/img/Logo.png"
              alt="Logo del Sistema Braille"
            />
          </div>

          <div className="col header-text">
            <div className="logo">Portal Educativo</div>

            <div className="subtitulo">
              <strong>Sistema Braille</strong>. El enfoque de las
              Matemáticas Aplicadas y Computación
              <br />
              <small>Proyecto PAIDI 006-2023</small>
            </div>
          </div>

          <div className="col-auto membrete">
            <img
              src="/portal/img/escudo-b2.png"
              alt="Escudo institucional"
            />
          </div>

        </div>
      </div>
    </header>
  );
}