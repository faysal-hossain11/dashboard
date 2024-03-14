export const OutlineField = ({
  label,
  placeholder,
  required,
  type,
  name,
  bg,
  size,
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label
        className={`font-primaryFont text-primaryColor ${
          size === "xl" ? "font-bold" : "font-medium"
        } text-${size}`}
      >
        {label}
      </label>
      <input
        style={{ border: "0.5px solid #6A6A6A" }}
        className={`py-3.5 px-4 bg-${bg} rounded-[10px] w-full h-[52px] focus:outline-none`}
        type={type}
        name={name}
        id=""
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
