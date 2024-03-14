const UploadButton = ({ text }) => {
  return (
    <button className="py-3 px-[22px] bg-[#A4A4A4] rounded-[10px] w-full">
      <p className="text-[#FFF] text-base font-bold">{text}</p>
    </button>
  );
};

export default UploadButton;