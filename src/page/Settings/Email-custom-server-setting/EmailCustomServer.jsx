const EmailCustomServer = () => {
  return (
    <div className="py-[47px] px-[172px] max-[992px]:px-10 max-[576px]:p-5">
      <h2 className="text-primaryColor font-bold text-2xl text-center">
        Email Server Settings
      </h2>
      <form className="mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 max-[767px]:grid-cols-1 max-[767px]:gap-5">
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              Email Server
            </label>
            <select
              className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[48px]"
              name=""
              id=""
            >
              <option value="">Enable</option>
              <option value="">Disable</option>
            </select>
          </div>
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              SMTP Host
            </label>
            <select
              className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[48px]"
              name=""
              id=""
            >
              <option value="">EG. 256</option>
              <option value="">EG. 256</option>
            </select>
          </div>
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              Encryption Protocol
            </label>
            <select
              className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[48px]"
              name=""
              id=""
            >
              <option value="">Unencrypted/TLS</option>
              <option value="">Unencrypted/TLS</option>
            </select>
          </div>
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              SMTP Username
            </label>
            <select
              className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[48px]"
              name=""
              id=""
            >
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              SMTP Password
            </label>
            <select
              className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[48px]"
              name=""
              id=""
            >
              <option value="">Use Custom</option>
              <option value="">Use Custom</option>
            </select>
            <div className="mt-5">
              <span className="text-primaryColor text-xs font-medium">
                Please Note:
              </span>{" "}
              <span className="text-[#3F3F3F] text-sm font-normal">
                We recommend you to test configuration using the option below
                before save.
              </span>
            </div>
            <div className="mt-10 max-[767px]:mt-8 max-[576px]:mt-5">
              <button className="px-4 py-[6px] bg-[#A4A4A4] rounded-[10px] h-[36px] flex justify-center items-center">
                <span className="text-sm text-[#FFF] font-bold">
                  Test Email Settings
                </span>
              </button>
            </div>
          </div>
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              SMTP Port
            </label>
            <select
              className="py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[#FFF] mt-[10px] h-[48px]"
              name=""
              id=""
            >
              <option value="">EG. 256</option>
              <option value="">EG. 256</option>
            </select>
          </div>
        </div>
        <div className="mt-[54px] max-[767px]:mt-10 max-[576px]:mt-5 max-w-[240px] mx-auto">
          <input
            className="font-bold text-[#FFF] text-base px-[22px] py-3 bg-[#A4A4A4] rounded-[10px] h-[45px] w-full cursor-pointer"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailCustomServer;
