import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import mapa from "/src/assets/mapa-ubicacion.png";

const Contacto = () => {
  return (
    <div className="flex justify-center items-center h-full  max-h-full font-manrope pt-28">
      <div className="md:grid md:grid-cols-4 md:grid-rows-2 flex flex-col px-16 py-8">
        <div className="md:col-span-3">
          <h3 className="text-purple-text text-2xl md:text-3xl font-semibold mb-10">
            Desde hace 20 años brindamos soluciones a miles de familias,
            empresas y emprendimientos, ofreciendo productos de primera calidad.
          </h3>
          <ul className="text-gray-secondary_text text-md md:text-lg">
            <li className="flex gap-4 items-center mb-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl text-purple-header"
              />
              <span className="text-lg">
                Guiñazu s/n, Barrio San Cayeta, Santa Rosa, Mendoza
              </span>
            </li>
            <li className="flex gap-4 items-center mb-4">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-xl text-purple-header"
              />
              <Link to="https://api.whatsapp.com/send?phone=5492634947057&text=Hola!%20Quisiera%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20los%20productos.">
                +549-2634 94-7057
              </Link>
            </li>
            <li className="flex gap-4 items-center mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl text-purple-header"
              />
              <span>sangabriel_contacto@yahoo.com.ar</span>
            </li>
            <li className="flex gap-4 items-center mb-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl text-purple-header"
              />
              <Link to="https://www.facebook.com/papelhigienicosangabrielmza">
                Papel Higiénico San Gabriel
              </Link>
            </li>
          </ul>
        </div>
        <picture className="flex justify-end items-end">
          <img
            src={mapa}
            alt=""
            className="lg:w-[250px] lg:h-[250px] rounded-3xl w-full"
          />
        </picture>
        <p className="md:col-span-5 flex justify-between border-t-[1px] border-purple-titles py-10 text-sm text-purple-titles font-bold mt-16">
          <span>San Gabriel S.A</span>
          <span>Fabrica de papel higiénico</span>
        </p>
      </div>
    </div>
  );
};

export default Contacto;
