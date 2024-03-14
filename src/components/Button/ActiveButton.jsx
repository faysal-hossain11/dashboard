const ActiveButton = ({ text }) => {
  return (
    <button className="bg-primaryColor px-[10px] py-[3px] rounded-[10px]">
      <p className="text-white text-xs font-bold">{text}</p>
    </button>
  );
};

export default ActiveButton;