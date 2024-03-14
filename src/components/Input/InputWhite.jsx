// eslint-disable-next-line react/prop-types
const InputWhite = ({ label, placeholder, require }) => {
  return (
    <>
      <label className="font-primaryFont text-primaryColor font-medium text-base">
        {label}
      </label>
      <input
        className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[45px]"
        type="text"
        id=""
        placeholder={placeholder}
        required={require}
      />
    </>
  );
};

export default InputWhite;
