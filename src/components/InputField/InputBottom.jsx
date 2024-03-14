const InputBottom = ({ label, type, name, placeholder, required, size }) => {
  const style = {
    backgroundColor: "transparent",
    border: "none",
    paddingBottom: "10px",
    borderBottom: "0.5px solid #030813",
    width: "100%",
  };
  return (
    <div className="flex flex-col gap-[10px]">
      {label && (
        <label
          className={`font-primaryFont text-primaryColor ${
            size === "xl" ? "font-bold" : "font-medium"
          } text-${size}`}
        >
          {label}
        </label>
      )}
      <input
        style={style}
        className="focus:outline-none"
        type={type}
        name={name}
        id="placeholders"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputBottom;
