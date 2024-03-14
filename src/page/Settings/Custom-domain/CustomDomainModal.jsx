import AddButton from "../../../components/Button/AddButton";

const CustomDomainModal = () => {
  return (
    <dialog id="domain-modal" className="modal">
      <div className="modal-box max-w-[768px] rounded-[5px] bg-[#F5F5F5] px-12 pt-[69px] pb-32 max-[767px]:p-8 max-[576px]:px-5 max-[576px]:py-6">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="">
          <h1 className="font-medium text-2xl text-center text-primaryColor">
            New Tracking Domain
          </h1>
          <form className="mt-[13px]">
            <label className="font-normal text-base text-primaryColor">
              Enter a Valid Domain/Sub-domain Name:
            </label>
            <input
              style={{ border: "0.5px solid #6A6A6A" }}
              className="w-full mt-[7px] px-4 py-3.5 rounded-[10px] h-[47px]"
              type="text"
              name=""
              id=""
              placeholder="example@gmail.com"
            />
            <div className="mt-[22px] max-[576px]:mt-4">
              <AddButton text={"Save"} varient={"black"} />
            </div>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CustomDomainModal;
