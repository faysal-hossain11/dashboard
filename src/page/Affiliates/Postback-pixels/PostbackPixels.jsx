import { Icon } from "@iconify/react";
import BlackButton from "../../../components/Button/BlackButton";
import GrayButton from "../../../components/Button/GrayButton";
import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";
import CallbackManagerModal from "../Callback-manager/CallbackManagerModal";

const PostbackPixels = () => {
  const tableData = [
    {
      id: 1,
      pixelId: "02",
      affiliate: "MOe",
      offer: "MOe",
      goal: "Any",
      pixelType: "Server Postback (S2S)",
    },
  ];
  return (
    <>
      <Headers text={{ heading: "Callback Manager Add Callback" }}>
        <BlackButton
          text={"Add Callback"}
          icon={"ic:twotone-plus"}
          contentReverse={true}
        />
      </Headers>
      <div className="sm:p-5 p-2 md:mt-[60px] mt-10 rounded-[10px] bg-white max-[767px]:mt-5">
        <div className="sm:flex justify-between items-center">
          <div className="sm:flex gap-5">
            <div className="sm:w-[162px]">
              <SelectFiled
                bg={"#F5F5F5"}
                name={"name"}
                select={[
                  { value: "Select Affiliate", option: "Select Affiliate" },
                  { value: "Select Affiliate", option: "Select Affiliate" },
                ]}
              />
            </div>
            <div className="sm:w-[134px] sm:mt-0 mt-2">
              <SelectFiled
                bg={"#F5F5F5"}
                name={"name"}
                select={[
                  { value: "Any Status", option: "Any Status" },
                  { value: "Any Status", option: "Any Status" },
                ]}
              />
            </div>
          </div>
          <div className="flex gap-5 sm:mt-0 mt-2">
            <div className="bg-[#F3F3F3] p-3.5 rounded-[5px]">
              <svg
                className="text-primaryColor w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.88902 1.34837C6.97336 1.20574 7.1109 1.10244 7.27139 1.06119C7.43187 1.01993 7.60217 1.0441 7.74485 1.12837L8.43818 1.53837L16.144 5.96087C16.2878 6.04342 16.3929 6.1797 16.4362 6.33973C16.4795 6.49976 16.4574 6.67043 16.3748 6.8142C16.2923 6.95797 16.156 7.06306 15.996 7.10635C15.836 7.14964 15.6653 7.12759 15.5215 7.04504L14.819 6.6417L13.5648 8.8067L13.5632 8.80504L11.4315 7.5792C11.3603 7.53682 11.2814 7.50901 11.1994 7.49741C11.1173 7.4858 11.0338 7.49062 10.9536 7.51159C10.8735 7.53256 10.7983 7.56925 10.7324 7.61955C10.6666 7.66984 10.6114 7.73272 10.5701 7.80454C10.5288 7.87636 10.5021 7.95568 10.4917 8.03788C10.4813 8.12008 10.4874 8.20353 10.5096 8.28337C10.5317 8.36321 10.5695 8.43785 10.6208 8.50294C10.6721 8.56804 10.7358 8.62229 10.8082 8.66254L12.9382 9.88754L12.1373 11.2709L12.1357 11.27L8.63318 9.25504C8.56199 9.21265 8.48307 9.18485 8.40103 9.17324C8.31899 9.16163 8.23546 9.16645 8.1553 9.18742C8.07514 9.20839 7.99995 9.24509 7.93411 9.29538C7.86826 9.34567 7.81307 9.40856 7.77175 9.48038C7.73042 9.55219 7.70379 9.63151 7.6934 9.71371C7.68302 9.79592 7.68908 9.87936 7.71123 9.9592C7.73339 10.039 7.7712 10.1137 7.82246 10.1788C7.87373 10.2439 7.93743 10.2981 8.00985 10.3384L11.5098 12.3525L10.7723 13.6267L10.7707 13.625L8.59318 12.3725C8.4497 12.2928 8.28061 12.2727 8.12243 12.3166C7.96426 12.3605 7.8297 12.4648 7.74783 12.6071C7.66597 12.7494 7.64336 12.9182 7.6849 13.077C7.72645 13.2358 7.8288 13.3719 7.96985 13.4559L10.1457 14.7075L9.21235 16.3175C8.67378 17.2437 7.79029 17.9189 6.75518 18.1953C5.72008 18.4717 4.61762 18.3269 3.68902 17.7925C3.22967 17.5291 2.82687 17.1775 2.50372 16.7579C2.18058 16.3384 1.94345 15.8592 1.80594 15.3478C1.66844 14.8364 1.63326 14.3029 1.70243 13.7779C1.7716 13.2529 1.94375 12.7467 2.20902 12.2884L7.81068 2.6192L7.80568 2.6167L7.10902 2.20504C7.03828 2.16327 6.97647 2.10797 6.92713 2.0423C6.87778 1.97663 6.84186 1.90187 6.82143 1.82231C6.801 1.74275 6.79645 1.65993 6.80805 1.57861C6.81964 1.49729 6.84716 1.41905 6.88902 1.34837ZM16.6665 14.1667C17.5873 14.1667 18.3332 13.3892 18.3332 12.4309C18.3332 11.8309 17.6807 11.03 17.1915 10.5142C17.1243 10.4422 17.043 10.3849 16.9527 10.3456C16.8624 10.3064 16.765 10.2862 16.6665 10.2862C16.5681 10.2862 16.4706 10.3064 16.3803 10.3456C16.29 10.3849 16.2087 10.4422 16.1415 10.5142C15.6524 11.03 14.9999 11.8309 14.9999 12.4309C14.9999 13.3892 15.7457 14.1667 16.6665 14.1667Z"
                  fill="#030813"
                />
              </svg>
            </div>
            <GrayButton icon={"mdi-light:pencil"} />
            <button
              onClick={() =>
                document.getElementById("callbackManager-modal").showModal()
              }
            >
              <GrayButton icon={"ion:trash-outline"} />
            </button>
            <CallbackManagerModal />
          </div>
        </div>
        <div className="mt-5">
          <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-primaryColor rounded-[10px]">
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-left w-[80px]">
                      <Icon
                        className="w-[26px] h-[26px] text-[#FFFFFF]"
                        icon="radix-icons:checkbox"
                      />
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[80px]">
                      Pixel ID
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[80px]">
                      Affiliate
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[80px]">
                      Offer
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Goal / Event
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[150px]">
                      Pixel Type
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Status
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Code / Url
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data) => (
                  <>
                    <tr key={data?.id}>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-left">
                          <Icon
                            className="w-[26px] h-[26px] text-[#A4A4A4]"
                            icon="radix-icons:checkbox"
                          />
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.pixelId}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.affiliate}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.offer}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.goal}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.pixelType}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <div className="flex gap-2 items-center">
                          <p className="text-sm font-normal text-primaryColor text-left">
                            Active{" "}
                          </p>
                          <span className="h-2.5 w-2.5 bg-[#38E25D] rounded"></span>
                        </div>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <input
                          style={{ border: "0.5px solid #6A6A6A" }}
                          className="h-10 w-40 rounded-[5px] px-2"
                          type="text"
                          name=""
                          id=""
                        />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>{" "}
      </div>
      <div className="mt-[86px] flex justify-between max-[576px]:flex-col max-[576px]:gap-4 max-[767px]:mt-10 max-[576px]:mt-5">
        <div></div>
        <div className="flex gap-6 max-[576px]:justify-center">
          <button
            style={{ border: "0.5px solid #030813" }}
            className="py-[10px] pl-3.5 pr-[22px] rounded-[10px] flex gap-[10px] items-center"
          >
            <Icon
              className="h-[22px] w-[22px] text-[#3A3A3A]"
              icon="material-symbols:chevron-left"
            />
            <span className="text-base font-bold text-[#3A3A3A]">Previous</span>
          </button>
          <button className="py-[11px] pr-3.5 pl-[22px] rounded-[10px] bg-primaryColor flex gap-[10px] items-center">
            <span className="text-base font-bold text-[#FFFFFF]">Next</span>
            <Icon
              className="h-[22px] w-[22px] text-[#FFFFFF]"
              icon="material-symbols:chevron-right-rounded"
            />
          </button>
        </div>
        <div className="flex items-center gap-[15px] max-[576px]:justify-center">
          <span className="text-sm font-normal text-primaryColor">Page</span>
          <div
            style={{ border: "0.5px solid #030813" }}
            className="flex gap-[5px] items-center py-3.5 pl-[10px] pr-1 rounded-lg bg-[#EEE] w-11 h-[33px]"
          >
            <span className="text-base font-normal text-primaryColor">2</span>
            <Icon className="text-base" icon="fluent:arrow-sort-24-regular" />
          </div>
          <span className="text-sm font-normal text-primaryColor">of 10</span>
        </div>
      </div>
    </>
  );
};

export default PostbackPixels;
