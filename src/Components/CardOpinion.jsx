const CardOpinion = ({ opinion }) => {
  const { face, nombre, text } = opinion;

  return (
    <div className="m-2 bg-white shadow-xl border-2 rounded-xl flex flex-col gap-3 w-auto md:w-1/4 h-auto overflow-hidden p-5">
      <div className="flex gap-4 items-center">
        <img
          src={face}
          className="object-cover rounded-full h-20 w-20"
          alt={`Imagen de ${nombre}`}
        />
        <h2 className="text-2xl">{nombre}</h2>
      </div>
      <p className="w-full">{text}</p>
    </div>
  );
};
export default CardOpinion;
