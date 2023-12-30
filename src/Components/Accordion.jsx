import { useState } from "react";

const Accordion = (props) => {
  const [item, setItem] = useState(props.datas);

  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div
      className={`bg-white-white_figma px-6 py-9 border-2 mb-5 border-gray-gray_figma rounded-2xl w-full duration-500 group font-manrope   ${
        item.active === 1 ? "is-active border-2 bg-white-white_figma border-blue-400" : "border-2"
      } text-2xl `}
    >
      <div className="flex items-center py-2">
        <div className="w-full duration-500 group-[.is-active]:font-bold text-lg font-semibold text-purple-titles text-left">
          {item.question}
        </div>
        <div
          className={`text-3xl origin-center duration-500 cursor-pointer group-[.is-active]:rotate-[180deg] rounded-full text-purple-titles `}
          onClick={handleToggleActive}
        >
          {item.active === 1 ? "x" : "+"}
        </div>
      </div>
      <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[250px] text-sm md:text-md lg:text-lg text-blue-600 text-left">
        {item.answer}
      </div>
    </div>
  );
};
export default Accordion;
