import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import mapa from "/src/assets/mapa-ubicacion.png";

const Contacto = () => {
  return (
    <div className="flex justify-center items-center h-altura_pagina_md max-h-full font-manrope">
    <div className="grid grid-cols-3 grid-rows-2 px-16">
      <div className="col-span-2">
        <h3>
          Desde hace 20 años brindamos soluciones a miles de familias, empresas
          y emprendimientos, ofreciendo productos de primera calidad.
        </h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Guiñazu s/n, Barrio San Cayeta, Santa Rosa, Mendoza</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} />
            <Link to="https://api.whatsapp.com/send?phone=5492634947057&text=Hola!%20Quisiera%20tener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20los%20productos.">
              +549-2634 94-7057
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>sangabriel_contacto@yahoo.com.ar</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
            <Link to="https://www.facebook.com/papelhigienicosangabrielmza">
              Papel Higiénico San Gabriel
            </Link>
          </li>
        </ul>
      </div>
      <picture>
        <img src={mapa} alt="" className="w-[200px] h-[200px] rounded-3xl" />
      </picture>
      <p className="col-span-4 flex justify-between border-t-[1px] border-purple-titles py-10 text-sm text-purple-titles font-bold">
        <span>San Gabriel S.A</span>
        <span>Fabrica de papel higiénico</span>
      </p>
    </div>
    </div>
  );
};

export default Contacto;
