export const CheckboxInput = ({ label, id }) => {
  return (
    <div className="flex gap-5 items-center">
      <input className="h-[26px] w-[26px]" type="checkbox" name="" id={id} />
      <label htmlFor={id} className="text-base font-normal text-primaryColor">
        {label}
      </label>
    </div>
  );
};
