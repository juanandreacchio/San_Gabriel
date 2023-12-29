import namePrincipal from "/src/assets/san_gabriel-removebg-preview 1.png";

const Hero = () => {
  return (
    <div
      className={`w-full h-altura_pagina_md bg-blue-500 flex flex-col gap-5 items-center justify-center
       bg-backHero1 text-center bg-center md:bg-top bg-no-repeat bg-cover font-manrope `}
    >
      <div className="flex flex-col w-screen justify-center">
      <picture className="flex justify-center">
        <img
          src={namePrincipal}
          alt="imagen nombre san gabriel"
          className=""
          />
      </picture>
      <p className="text-white mt-4 md:text-5xl font-bold">
        Fábrica de papel Higiénico
      </p>
          </div>
    </div>
  );
};

export default Hero;
