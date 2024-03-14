import { Icon } from "@iconify/react";

const SearchFieldBorder = ({ placeholder, name }) => {
  const style = {
    top: "58%",
    transform: "translateY(-58%)",
    marginLeft: "15px",
  };
  return (
    <div className="relative">
      <input
        style={{ border: "0.5px solid #A4A4A4" }}
        type="search"
        name={name}
        placeholder={placeholder}
        className="py-[10px] bg-[#F5F5F5] pl-10 pr-5 rounded-[10px] outline-none focus:outline-none w-full"
      />
      <Icon
        style={style}
        icon="ic:outline-search"
        className="text-[#A4A4A4] text-xl absolute"
      />
    </div>
  );
};

export default SearchFieldBorder;
