
const InputField = ({ label, placeholder, required, type, name, bg, size }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      {label && <label className={`font-primaryFont text-primaryColor ${size === 'xl' ? 'font-bold' : 'font-medium'} text-${size}`}>
        {label}
      </label>}
      <input
        className={`py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[${bg}] h-[52px]`}
        type={type}
        id="placeholders"
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </div>
  );
};

export default InputField;