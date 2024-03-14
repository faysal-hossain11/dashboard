import { Icon } from "@iconify/react";

const PostBackDeleteButton = ({ text, icon, bg }) => {
  return (
    <button className={bg}>
      {icon && <Icon className="text-[22px] text-[#FFFFFF]" icon={icon} />}
      {text && <span className="text-[#FFF] text-sm font-bold">{text}</span>}
    </button>
  );
};

export default PostBackDeleteButton;
