import logoName from "/src/assets/hero/logoName.png";

const Logo = () => {
  return (
    <a href="#" className="z-50">
      <div className=" w-[100px] z-50 ">
        {/* <RectangleGroupIcon /> */}
        <img src={logoName} alt="Logo San gabriel" className="z-50" />
      </div>
    </a>
  );
};

export default Logo;
