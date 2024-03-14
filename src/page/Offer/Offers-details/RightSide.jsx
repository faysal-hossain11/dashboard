import { Icon } from "@iconify/react";
import { SmallHeader } from "../../../components/Headers/MiddleHeader";
import { PreviousBtn } from "../../../components/Button/MarcosBtn";

const RightSide = () => {
  const tableData = [
    {
      id: 1,
      status: "Default",
      revenue: "$1.60",
    },
  ];
  return (
    <div className="bg-[#FFF] rounded-[10px] sm:p-5 p-2">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <SmallHeader heading={"Revenue & Payout"} />
        <div>
          <PreviousBtn text={"Add Payout"} />
        </div>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primaryColor rounded-[10px]">
              <th className="px-5 py-[18px] max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[80px]">
                  Status
                </p>
              </th>
              <th className="px-5 py-[18px] max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[80px]">
                  Revenue
                </p>
              </th>
              <th className="px-5 py-[18px] max-[576px]:p-3 flex justify-end">
                <p className="text-base font-medium text-white text-right w-[80px]">
                  Edit
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <>
                <tr key={data?._id}>
                  <td className="p-5 max-[576px]:p-3">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.status}
                    </p>
                  </td>
                  <td className="p-5 max-[576px]:p-3">
                    <div className="flex gap-2.5 items-center">
                      <p className="text-sm font-normal text-primaryColor text-left">
                        {data?.revenue}
                      </p>
                      <span className="text-primaryColor text-sm font-normal rounded-[15px] bg-[#DDDFE2] px-[6px] py-1">
                        RPA
                      </span>
                    </div>
                  </td>
                  <td className="p-5 max-[576px]:p-3 flex justify-end">
                    <Icon
                      className="text-2xl text-[#000000]"
                      icon="mdi:pencil"
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

export default RightSide;
