const SuccessPendingButton = ({ text, bg }) => {
  return (
    <span id={bg} className="text-sm text-[#FFF] font-bold">
      {text}
    </span>
  );
};

export default SuccessPendingButton;
