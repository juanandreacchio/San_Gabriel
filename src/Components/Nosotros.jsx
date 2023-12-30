import IconStar from "./IconStar";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Wave1 from "../assets/waves/wave1.svg";
import nosotrosImage from "../assets/nosotros.jpg";

const Nosotros = () => {
  return (
    <div className="bg-slate-200 p-4 relative flex flex-col  pb-[100px] md:pb-[20px] min-h-altura_pagina_md max-h-full font-manrope">
      <div className="flex-col ml-14 my-14">
        <h2 className="text-5xl my-8 font-bold text-purple-titles">Nosotros</h2>

        <div className="flex flex-col md:flex-row  mx-auto justify-around my-8 w-full gap-40">
          <div className="flex flex-col gap-8 items-start text-xl w-7/12">
            <p className="">
              Hace veinte años, nació San Gabriel en Santa Rosa, Provincia de
              Mendoza, rindiendo homenaje a nuestro primogénito, Gabriel. Desde
              Buenos Aires hasta Mendoza, hemos crecido como empresa familiar,
              manteniendo nuestra esencia.
            </p>
            <p>
              La opinión de nuestros clientes es clave: confían en la calidad
              duradera de nuestros productos. En San Gabriel, nuestra misión es
              clara: superar las expectativas con productos innovadores y
              servicios de alta calidad.
            </p>
            <p>
              Mantenemos la integridad, la pasión y el compromiso que nos han
              guiado por dos décadas. San Gabriel es más que una empresa; es un
              legado de calidad. Te invitamos a explorar nuestro mundo y ser
              parte de su historia.
            </p>
            <p>Gracias por confiar en San Gabriel.</p>
          </div>
          <picture className="w-5/12">
          <img
            className="w-auto h-full rounded-cincuenta object-cover"
            src={nosotrosImage}
            alt="imagen nosotros pasta"
            />
            </picture>
        </div>
        <div className="text-base">
        <h2 className="text-5xl mt-8 font-bold text-purple-titles">¿Qué te garantizamos?</h2>
        <p className="my-6 text-xl tracking-wider">
          Queremos ser el socio estratégico de cada uno de nuestros clientes,
          ofreciendo la mejor alternativa adaptada a sus necesidades.
        </p>
        <ul className="my-6 text-lg md:text-xl flex flex-col gap-5">
          <li className="flex items-center mb-4">
            <IconStar />
            Precios que se ajusten a tu negocio
          </li>
          <li className="flex items-center mb-4">
            <IconStar />
            Productos de Calidad
          </li>
          <li className="flex items-center mb-4">
            <IconStar />
            Atención Personalizada
          </li>
          <li className="flex items-center mb-4">
            <IconStar />
            Estamos en la puerta de tu comercio
          </li>
        </ul>
      </div>
      <img
        className="absolute bottom-0 left-0 opacity-20"
        src={Wave1}
        alt="imagen fondo onda"
      />
              </div>
    </div>
  );
};

export default Nosotros;
