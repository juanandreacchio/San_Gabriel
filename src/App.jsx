import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductosContainer from "./Components/ProductosContainer";
import Nosotros from "./Components/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preguntas from "./Components/Preguntas";
import Contacto from "./Components/Contacto";
import OtrosProductosContainer from "./Components/OtrosProductosContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Nosotros />
        <ProductosContainer />
        <OtrosProductosContainer />
        <Preguntas />
        <Contacto />
        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/faqs" element={<Preguntas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/otrosproductos" element={<OtrosProductosContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
