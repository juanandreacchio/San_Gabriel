const Producto = ({ producto }) => {
  const { nombre, metros, rollos, linea, imagen } = producto;

  return (
    <div className="m-2 bg-white p-2 rounded-md flex flex-col  gap-3 w-full md:w-1/4 h-[300px] overflow-hidden">
      <figure className="h-2/3 overflow-hidden">
        <img
          src={imagen}
          className="w-full h-full object-cover"
          alt={`Imagen de ${nombre}`}
        />
      </figure>
      <h2 className="bg-purple-900 text-white text-center">{nombre}</h2>
      <p>Metros : ${metros}</p>
      <p>Rollos : ${rollos}</p>
      <p className="text-right text-orange-200 bg-black p-2">Línea: {linea}</p>
    </div>
  );
};

export default Producto;
