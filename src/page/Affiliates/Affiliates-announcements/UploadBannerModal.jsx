const UploadBannerModal = () => {
  return (
    <dialog id="banner-modal" className="modal">
      <div className="modal-box max-w-[721px] pl-[54px] pt-[49px] pr-[31px] pb-[66px] max-[767px]:px-6 max-[767px]:py-7 max-[767px]:px-3">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <h1 className="text-2xl text-primaryColor font-medium text-center">
            Upload Featured Banner
          </h1>
          <div className="mt-[32px] max-[576px]:mt-5">
            <h2 className="text-xl font-medium text-[#000]">
              Banner specifications
            </h2>
            <p className="text-base font-light text-primaryColor max-[576px]:text-xm">
              This banner will be displayed on affiliate dashboard home page.
            </p>
            <div className="ml-3 mb-7 max-[576px]:pl-0 max-[576px]:mb-4">
              <li className="text-base font-light text-primaryColor max-[576px]:text-xm">
                Recommended Banner size is 1200x150
              </li>
              <li className="text-base font-light text-primaryColor max-[576px]:text-xm">
                Maximum Allowed banner width is 1200px
              </li>
              <li className="text-base font-light text-primaryColor max-[576px]:text-xm">
                Maximum allowed banner height is 250px
              </li>
              <li className="text-base font-light text-primaryColor max-[576px]:text-xm">
                Maximum Allowed file size is 500KB
              </li>
              <li className="text-base font-light text-primaryColor max-[576px]:text-xm">
                Allowed file type are; JPG, PNG and GIF.
              </li>
            </div>
          </div>
          <form>
            <div>
              <label className="text-base font-normal text-primaryColor">
                Select Banner File
              </label>
              <input
                style={{ border: "0.5px solid #6A6A6A" }}
                className="px-4 py-3 mt-2 w-full rounded-[10px] text-sm font-normal text-primaryColor"
                type="file"
                name=""
                id=""
              />
            </div>
            <div className="mt-5">
              <label className="text-base font-normal text-primaryColor">
                Link to open when user click on the banner (Optional)
              </label>
              <input
                style={{ border: "0.5px solid #6A6A6A" }}
                className="px-4 py-3.5 mt-2 w-full rounded-[10px] text-sm font-normal text-primaryColor h-[47px]"
                type="text"
                name=""
                id=""
                placeholder="Text type here"
              />
            </div>
            <div className="mt-[47px] max-[576px]:mt-5">
              <input
                className="py-3 px-[22px] bg-primaryColor text-base text-[#FFF] font-bold rounded-[10px] w-full h-[45px]"
                type="submit"
                value="Submit"
              />
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

export default UploadBannerModal;
