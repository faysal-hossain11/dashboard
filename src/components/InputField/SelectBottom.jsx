export const SelectBottom = ({ label, name, select, size }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      {label && (
        <label
          className={`${
            size === "xl" ? "font-bold" : "font-medium"
          } text-${size} text-primaryColor`}
        >
          {label}
        </label>
      )}
      <select
        style={{ borderBottom: "0.5px solid #030813" }}
        className="pb-[10px] bg-transparent w-full focus:outline-none"
        name={name}
        id="placeholders"
      >
        <option selected disabled>
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
