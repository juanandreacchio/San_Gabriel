import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductosContainer from "./Components/ProductosContainer";

import Nosotros from "./Components/Nosotros";
import Preguntas from "./Components/Preguntas";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <ProductosContainer />

      <Preguntas />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
