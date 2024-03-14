
const Textarea = ({label, placeholder, name, bg, size, h}) => {
    return (
        <div className="flex flex-col gap-5">
       {label && <label className={`font-primaryFont text-primaryColor text-${size} ${size === 'xl' ? 'font-bold' : 'font-medium'}`}>{label}</label>}
            <textarea  name={name}
              id="placeholders"
              className={`rounded-[10px] bg-[${bg}] w-full h-[${h}] py-3.5 px-2.5 focus:outline-none`}
              placeholder={placeholder} />
        </div>
    );
};

export default Textarea;