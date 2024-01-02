import logoName from "/src/assets/hero/logoName.png";

const Logo = () => {
  return (
    <a href="#" className="">
      <div className=" w-[100px]  z-50 absolute md:static top-5  ">
        {/* <RectangleGroupIcon /> */}
        <img src={logoName} alt="Logo San gabriel" className="z-50" />
      </div>
    </a>
  );
};

export default Logo;
