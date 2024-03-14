import { Icon } from "@iconify/react";
import CurencyEditModal from "./CurencyEditModal";
import { useState } from "react";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";
import SuccessPendingButton from "../../../components/Button/SuccessPendingButton";
import ReportButton from "../../../components/Button/ReportButton";

const CurencyManager = () => {
  const [click, setClick] = useState(false);
  const tableData = [
    {
      id: 1,
      curency: "MXN",
      offer: "0",
      rate: "1 MXN = 2.6565 EUD",
      lastUpdate: "2 Dyas Ago",
      quantity: "2 Dyas Ago",
      default: true,
    },
    {
      id: 2,
      curency: "MXN",
      offer: "0",
      rate: "1 MXN = 2.6565 EUD",
      lastUpdate: "2 Dyas Ago",
      quantity: "2 Dyas Ago",
      default: false,
    },
    {
      id: 3,
      curency: "MXN",
      offer: "0",
      rate: "1 MXN = 2.6565 EUD",
      lastUpdate: "2 Dyas Ago",
      quantity: "2 Dyas Ago",
      default: false,
    },
    {
      id: 4,
      curency: "MXN",
      offer: "0",
      rate: "1 MXN = 2.6565 EUD",
      lastUpdate: "2 Dyas Ago",
      quantity: "2 Dyas Ago",
      default: false,
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Currency Manager" }}>
        <BlackButton
          text={"Add Currency"}
          icon={"ic:twotone-plus"}
          contentReverse={"contentReverse"}
        />
        <button
          onClick={() => setClick(!click)}
          className={`flex items-center justify-center gap-[10px] py-3 pl-[22px] pr-3.5 w-[300px] h-[46px] rounded-[10px] ${
            click ? "bg-[#EE501F]" : "bg-primaryColor"
          } max-[414px]:w-full`}
        >
          <span className="text-white text-base font-semibold">
            {click ? "Disable Rated" : "Enable Rate"} Auto Update
          </span>
          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M17 8.25H14.25V5.1975C14.2476 4.54913 13.9889 3.928 13.5305 3.46952C13.072 3.01105 12.4509 2.75241 11.8025 2.75H5.6975C5.04913 2.75241 4.428 3.01105 3.96952 3.46952C3.51105 3.928 3.25241 4.54913 3.25 5.1975V11.3025C3.25241 11.9509 3.51105 12.572 3.96952 13.0305C4.428 13.4889 5.04913 13.7476 5.6975 13.75H8.75V16.5C8.75 17.2293 9.03973 17.9288 9.55546 18.4445C10.0712 18.9603 10.7707 19.25 11.5 19.25H17C17.7293 19.25 18.4288 18.9603 18.9445 18.4445C19.4603 17.9288 19.75 17.2293 19.75 16.5V11C19.75 10.2707 19.4603 9.57118 18.9445 9.05546C18.4288 8.53973 17.7293 8.25 17 8.25ZM8.75 11V11.9167H5.6975C5.53461 11.9167 5.3784 11.852 5.26322 11.7368C5.14804 11.6216 5.08333 11.4654 5.08333 11.3025V5.1975C5.08333 5.03461 5.14804 4.8784 5.26322 4.76322C5.3784 4.64804 5.53461 4.58333 5.6975 4.58333H11.8025C11.9654 4.58333 12.1216 4.64804 12.2368 4.76322C12.352 4.8784 12.4167 5.03461 12.4167 5.1975V8.25H11.5C10.7707 8.25 10.0712 8.53973 9.55546 9.05546C9.03973 9.57118 8.75 10.2707 8.75 11Z"
                fill="#F1F5FE"
              />
            </svg>
          ) : (
            <Icon
              className="text-[#FFFFFF] text-[22px]"
              icon="bi:database-fill-down"
            />
          )}
        </button>
      </Headers>
      <div className="overflow-x-auto mt-[30px] max-[576px]:mt-4 px-[15px] py-[29px] bg-white rounded-[10px] max-[576px]:py-5">
        <div className="mb-[37px] max-[576px]:mb-5 flex justify-between">
          <h2>Network Currency</h2>
          {/* <button
            style={{ background: "rgba(3, 8, 19, 0.10)" }}
            className="flex items-center gap-2 py-[6px] pl-3.5 pr-4 rounded-[10px]"
            onClick={() =>
              document.getElementById("curencyEdit-modal").showModal()
            }
          >
            <Icon
              className="text-primaryColor text-[22px]"
              icon="mdi-light:pencil"
            />
            <span className="text-primaryColor text-sm font-bold">Edit</span>
          </button> */}
          <ReportButton
            text={"Edit"}
            icon={"mdi-light:pencil"}
            contentReverse={true}
          />
          <CurencyEditModal />
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primaryColor rounded-[10px]">
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[100px]">
                  Currency
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[140px]">
                  Offers in Currency
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[155px]">
                  Exchange Rate
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[120px]">
                  Last Update
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[280px]">
                  State
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <>
                <tr key={data?._id}>
                  <td className="p-4 max-[576px]:p-2">
                    <div className="flex gap-[15px] items-center">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.curency}
                      </p>
                      {data?.default && (
                        <SuccessPendingButton text={"Default"} bg={"success"} />
                      )}
                    </div>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.offer}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.rate}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.lastUpdate}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2 flex gap-[30px]">
                    <PostBackDeleteButton
                      icon={"ri:close-circle-fill"}
                      text={"Remove"}
                      bg={"delete"}
                    />
                    <PostBackDeleteButton
                      text={"Make Default"}
                      icon={"mdi:target"}
                      bg={"edit"}
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurencyManager;
