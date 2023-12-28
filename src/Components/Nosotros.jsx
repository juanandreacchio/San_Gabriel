import IconStar from "./IconStar";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Wave1 from "../assets/waves/wave1.svg";
import nosotrosImage from "../assets/nosotros.jpg";

const Nosotros = () => {
  return (
    <div className="bg-slate-200 my-10 p-4 relative  pb-[100px] md:pb-[180px] z-10 ">
      <div className=" w-11/12 md:w-9/12 flex-col  mx-auto">
        <h2 className="text-3xl my-8 font-bold">Nosotros</h2>

        <div className="flex flex-col md:flex-row  mx-auto justify-around  gap-6 my-8">
          <div className="flex flex-col gap-8 justify-center items-start">
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
          <img
            className="w-full h-96 md:w-1/2 rounded-lg mx-auto object-contain"
            src={nosotrosImage}
            alt="imagen nosotros pasta"
          />
        </div>
        <h2 className="text-3xl my-8 font-bold">Que te Garantizamos ?</h2>
        <p className="text-xl tracking-wider">
          Queremos ser el socio estratégico de cada uno de nuestros clientes,
          ofreciendo la mejor alternativa adaptada a sus necesidades.
        </p>
        <ul className="my-6 text-lg md:text-xl flex flex-col gap-5">
          <li>
            <IconStar />
            Precios que se ajusten a tu negocio
          </li>
          <li>
            <IconStar />
            Productos de Calidad
          </li>
          <li>
            <IconStar />
            Atención Personalizada
          </li>
          <li>
            <IconStar />
            Estamos en la puerta de tu comercio
          </li>
        </ul>
      </div>
      <img
        className="absolute bottom-0 left-0"
        src={Wave1}
        alt="imagen fondo onda"
      />
    </div>
  );
};

export default Nosotros;
