import namePrincipal from "/src/assets/logoName.png";

const Hero = () => {
  return (
    <div
      className={`w-full h-screen bg-blue-500  pt-60 flex flex-col gap-5 items-center justify-start
       bg-backHero1 text-center bg-center md:bg-top bg-no-repeat bg-cover `}
    >
      <h1 className="text-white font-lobste text-6xl md:text-8xl ">
        <img
          src={namePrincipal}
          alt="imagen nombre san gabriel"
          className="h-2/3"
        />
      </h1>
      <p className="text-2xl md:text-3xl text-white w-2/3 text-center">
        Fábrica de papel Higiénico
      </p>
    </div>
  );
};

export default Hero;
