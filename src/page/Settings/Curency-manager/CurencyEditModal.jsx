const CurencyEditModal = () => {
  return (
    <dialog id="curencyEdit-modal" className="modal">
      <div className="modal-box max-w-[768px] bg-white rounded-[10px] pt-[69px] pr-[69px] pb-[52px] pl-[28px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl text-primaryColor font-medium text-center">
          Update Exchange Rates
        </h1>
        <div className="mt-[31px]">
          <input
            className="text-base font-bold text-[#FFFFFF] px-[22px] py-3 bg-primaryColor rounded-[10px] cursor-pointer w-full h-[45px] flex items-center justify-center"
            type="submit"
            value="Save"
          />
        </div>
      </div>
    </dialog>
  );
};

export default CurencyEditModal;
