const SelectFiled = ({ label, name, select, size, bg }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      {label && (
        <label
          className={`text-primaryColor ${
            size === "xl" ? "font-bold" : "font-medium"
          } text-${size}`}
        >
          {label}
        </label>
      )}
      <select
        className={`py-3.5 px-2.5 bg-[${bg}] rounded-[10px] w-full h-[52px] focus:outline-none`}
        name={name}
        id="placeholders"
      >
        <option disabled selected>
          Select
        </option>
        {select?.map((e, i) => (
          <option key={i} value={e?.value}>
            {e?.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFiled;
