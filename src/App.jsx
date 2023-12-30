import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductosContainer from "./Components/ProductosContainer";
import Nosotros from "./Components/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preguntas from "./Components/Preguntas";
import Contacto from "./Components/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/faqs" element={<Preguntas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<ProductosContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
