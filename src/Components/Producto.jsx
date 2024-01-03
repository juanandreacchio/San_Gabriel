const Producto = ({ producto, imagenBack }) => {
  const { nombre, metros, rollos, linea, imagen } = producto;

  console.log("imagenBack", imagenBack);

  return (
    <div className=" bg-white-white_figma rounded-xl border-2 border-gray-gray_figma flex flex-col justify-start gap-3 w-full max-w md:w-[360px] lg:w-80 h-[480px] overflow-hidden font-manrope ">
      <figure className="h-full   flex justify-center items-center p-8">
        {/* <img
          // src={imagen}          className="w-full h-full object-cover bg-prod4"
          alt={`Imagen de ${nombre}`}
        /> */}
        {/* <div className={`w-full h-full object-cover bg-${imagen}`}></div> */}
        <div
          className={`w-full h-full  ${imagenBack}  bg-center bg-no-repeat bg-cover`}
        ></div>
      </figure>
      <div className="p-4 text-[32px] h-1/2 leading-none flex flex-col items-start gap-5 ">
        <h2 className=" text-purple-titulo_card  font-bold mb-4 ">
          {nombre}
          {metros ? <span> {metros} metros </span> : <span> {metros} </span>}
        </h2>
        <p className="text-gray-secondary_text text-2xl font-semibold leading-none">
          {rollos}
        </p>
      </div>
    </div>
  );
};

export default Producto;
