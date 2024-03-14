import { Icon } from "@iconify/react";

const IMTypes = ({ name }) => {
  return (
    <div className="py-3.5 pl-[6px] pr-[10px] flex items-center gap-2 rounded-[10px] bg-[#F5F5F5] w-fit">
      <Icon className="text-5 text-[#6A6A6A]" icon="ion:close-outline" />
      <span className="text-sm font-bold text-[#6A6A6A]">{name}</span>
    </div>
  );
};

export default IMTypes;
