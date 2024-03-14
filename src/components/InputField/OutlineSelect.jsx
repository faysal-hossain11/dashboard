
const OutlineSelect = ({label, size, select}) => {
    return (
        <div className="flex flex-col gap-[10px]">
        {label && <label className={`text-primaryColor ${size === 'xl' ? 'font-bold' : 'font-medium'} text-${size}`}>
          {label}
        </label>}
        <select style={{border: '0.5px solid #6A6A6A'}}
          className="py-3.5 px-4 bg-transparent rounded-[10px] w-full h-[52px] focus:outline-none"
          name={name}
          id="placeholders"
        >
          <option disabled selected>Select</option>
          {select?.map((e, i) =>  (<option key={i} value={e?.value}>{e?.option}</option>))}
        </select>
      </div>
    );
};

export default OutlineSelect;