const CurencyModal = () => {
  return (
    <dialog id="curency-modal" className="modal">
      <div className="modal-box max-w-[768px] px-12 pt-[69px] pb-[118px] bg-[#F5F5F5] rounded-[5px] max-[767px]:p-8 max-[576px]:px-5">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-primaryColor text-2xl font-medium text-center">
          Add Currency
        </h1>
        <form>
          <div className="flex flex-col gap-[22px] mt-[51px] max-[576px]:mt-5">
            <div>
              <label className="text-base text-primaryColor font-normal">
                Currency
              </label>
              <select
                style={{ border: "0.5px solid #6A6A6A" }}
                className="mt-2 px-4 py-3.5 bg-transparent rounded-[10px] w-full"
                name=""
                id=""
              >
                <option value="">AMD</option>
                <option value="">MXN</option>
              </select>
            </div>
            <div>
              <label className="text-base text-primaryColor font-normal">
                Exchange Rate: 1 AMD =
              </label>
              <div className="relative">
                <input
                  style={{ border: "0.5px solid #6A6A6A" }}
                  className="mt-2 px-4 py-3.5 bg-transparent rounded-[10px] w-full h-[52px]"
                  type="number"
                  name=""
                  id=""
                  placeholder="2"
                />
                <p className="font-normal text-base text-primaryColor absolute top-[22px] right-12">
                  MXN
                </p>
              </div>
            </div>
            <div className="mt-5 max-[576px]:mt-0">
              <input
                className="text-base font-bold text-[#FFFFFF] px-[22px] py-3 bg-primaryColor rounded-[10px] cursor-pointer w-full h-[45px] flex items-center justify-center"
                type="submit"
                value="Save"
              />
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CurencyModal;
