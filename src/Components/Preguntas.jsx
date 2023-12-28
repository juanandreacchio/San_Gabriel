import { useState } from "react";
import Accordion from "./Accordion";

const Preguntas = () => {
  const [list, setList] = useState([
    {
      question: "Cuales son los métodos de pago ?",
      answer:
        "Aceptamos diversas formas de pago para brindarte opciones convenientes, incluyendo efectivo, tarjeta de débito, transferencias, cheques y Mercado pago",
      // active: 1,
    },
    {
      question: "Cómo compro los productos ?",
      answer: "Ponete en contacto con nosotros! Link directo a WhatsApp",
    },
    {
      question: "Cómo es la forma de entrega ?",
      answer:
        "Realizamos envíos en Cuyo, Córdoba, la Rioja y Tucumán, mediante nuestra eficiente logística. Nos comprometemos a entregarlo en un plazo de 7 a 10 días.",
    },
    {
      question: "Hacen devoluciones ?",
      answer:
        "Aceptamos devoluciones por productos defectuosos o errores en el envío. Garantizamos calidad y buscamos brindar la mejor experiencia a nuestros clientes. Si surge algún problema, contáctanos vía Whatsapp para resolverlo.",
    },
  ]);

  return (
    // <div className="w-10/12 flex-col  mx-auto">
    //   <h2 className="text-3xl my-8">Preguntas Frecuentes </h2>
    //   <div className="flex flex-col md:flex-row  mx-auto justify-around"></div>
    // </div>

    <div className="flex flex-col items-center mx-auto wrapper w-full text-center">
      <h2 className="text-2xl md:text-3xl my-8 font-bold">
        Preguntas Frecuentes{" "}
      </h2>
      {/* <div className="flex flex-col md:flex-row  mx-auto justify-around"></div> */}
      <div className="  py-5  max-w-screen-lg">
        <div className="list w-11/12 md:w-4/5  mx-auto flex justify-center items-center flex-wrap">
          {list.map((item, key) => (
            <Accordion key={key} datas={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
