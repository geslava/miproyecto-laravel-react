

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Encabezado from "./components/Encabezado";
import MenuPrincipal from "./components/MenuPrincipal";
import PiePagina from "./components/PiePagina";

import Inicio from "./pages/Inicio";

function PaginaPendiente({ titulo }) {
  return (
    <main className="container py-5">
      <h1>{titulo}</h1>
      <p>Esta sección se encuentra en proceso de integración.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Encabezado />

      <MenuPrincipal />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/inclusion"
          element={<PaginaPendiente titulo="Inclusión" />}
        />

        <Route
          path="/sistema-braille"
          element={<PaginaPendiente titulo="Sistema Braille" />}
        />

        <Route
          path="/matematicas"
          element={<PaginaPendiente titulo="Matemáticas Aplicadas" />}
        />

        <Route
          path="/computacion"
          element={<PaginaPendiente titulo="Computación" />}
        />

        <Route
          path="/adquisiciones"
          element={<PaginaPendiente titulo="Materiales | Adquisiciones" />}
        />

        <Route
          path="/cursos"
          element={<PaginaPendiente titulo="Cursos" />}
        />

        <Route
          path="/agradecimientos"
          element={<PaginaPendiente titulo="Agradecimientos" />}
        />

        <Route
          path="/contacto"
          element={<PaginaPendiente titulo="Contacto" />}
        />

        <Route
          path="*"
          element={<PaginaPendiente titulo="Página no encontrada" />}
        />
      </Routes>

      <PiePagina />
    </BrowserRouter>
  );
}

export default App;
