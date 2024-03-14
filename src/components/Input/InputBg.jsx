// eslint-disable-next-line react/prop-types
const InputBg = ({ label, placeholder, require }) => {
  return (
    <>
      <label className="font-primaryFont text-primaryColor font-medium text-base">
        {label}
      </label>
      <input
        className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#F5F5F5] mt-[10px] h-[48px]"
        type="text"
        id=""
        placeholder={placeholder}
        required={require}
      />
    </>
  );
};

export default InputBg;
