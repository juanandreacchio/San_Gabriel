import { useState } from "react";

const Accordion = (props) => {
  const [item, setItem] = useState(props.datas);

  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div
      className={`bg-[#e9e9e9] p-5 border mb-5 border-[#c9c6c655] rounded-md w-11/12 duration-500 group  ${
        item.active === 1 ? "is-active bg-white border-2 border-blue-400" : ""
      } text-2xl `}
    >
      <div className="flex items-center ">
        <div className="w-full duration-500 group-[.is-active]:font-bold text-xl text-left">
          {item.question}
        </div>
        <div
          className={`text-3xl origin-center   duration-500 cursor-pointer  group-[.is-active]:rotate-[180deg]  rounded-full font-semibold   ${
            item.active === 1 ? "text-red-500 " : " text-blue-600"
          }  `}
          onClick={handleToggleActive}
        >
          {item.active === 1 ? "x" : "+"}
        </div>
      </div>
      <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[100px] text-xl text-blue-600 text-left">
        {item.answer}
      </div>
    </div>
  );
};
export default Accordion;
