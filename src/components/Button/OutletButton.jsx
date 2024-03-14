const OutletButton = ({ text }) => {
  return (
    <button
      style={{ border: "0.5px solid #030813" }}
      className="py-2 px-[22px] rounded-[10px] w-full flex justify-center items-center"
    >
      <span className="font-normal text-base text-primaryColor">{text}</span>
    </button>
  );
};
export default OutletButton;
