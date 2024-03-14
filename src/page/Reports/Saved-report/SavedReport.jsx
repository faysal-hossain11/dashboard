import { Icon } from "@iconify/react";
import { useState } from "react";
import OfferDropdown from "../../../components/Reports/OfferDropdown";
import { Headers } from "../../../components/Headers/Headers";
import GeneralButton from "../../../components/Button/GeneralButton";
import GrayButton from "../../../components/Button/GrayButton";
import DownloadTable from "../../../components/Reports/Table-Feature/DownloadTable";
import ReportButton from "../../../components/Button/ReportButton";

const SavedReport = () => {
  const [click, setClick] = useState(false);
  const tableData = [
    {
      id: 1,
      date: "2023-05-08",
      impressions: "2.6%",
      clicks: "200",
      convention: "22",
      revenue: "$10.00",
      payout: "$8.00",
      profit: "$2.00",
      cpc: "2.6667",
      rpc: "2.6667",
    },
    {
      id: 2,
      date: "2023-05-08",
      impressions: "2.6%",
      clicks: "200",
      convention: "22",
      revenue: "$10.00",
      payout: "$8.00",
      profit: "$2.00",
      cpc: "2.6667",
      rpc: "2.6667",
    },
    {
      id: 4,
      date: "2023-05-08",
      impressions: "2.6%",
      clicks: "200",
      convention: "22",
      revenue: "$10.00",
      payout: "$8.00",
      profit: "$2.00",
      cpc: "2.6667",
      rpc: "2.6667",
    },
    {
      id: 5,
      date: "2023-05-08",
      impressions: "2.6%",
      clicks: "200",
      convention: "22",
      revenue: "$10.00",
      payout: "$8.00",
      profit: "$2.00",
      cpc: "2.6667",
      rpc: "2.6667",
    },
  ];
  return (
    <div className="pl-[62px] pr-[42px] max-[767px]:px-7 max-[576px]:px-5">
      <div className="xl:mb-[60px] md:mb-10 mb-5">
        <Headers text={{ heading: "Advertiser Report" }}>
          <div onClick={() => setClick(!click)}>
            <GeneralButton
              text={"Report Options"}
              icon={"iconamoon:arrow-down-2-fill"}
            />
          </div>
        </Headers>
      </div>
      <div className={click ? "block" : "hidden"}>
        <OfferDropdown />
      </div>
      <div className="p-[15px] max-[576px]:p-2 mt-[60px] rounded-[10px] bg-white max-[767px]:mt-5">
        <div className="flex justify-between items-center max-[767px]:flex-col max-[767px]:gap-5">
          <div className="flex gap-5">
            <GrayButton icon={"solar:copy-bold"} />
            <GrayButton icon={"ion:analytics-sharp"} />
            <DownloadTable />
          </div>
          <div className="flex gap-5 max-[576px]:flex-col">
            <button
              style={{ border: "0.5px solid #A4A4A4" }}
              className="flex gap-2 items-center py-[6px] pl-3.5 pr-4 rounded-[10px] h-[34px]"
            >
              <Icon
                className="w-[22px] h-[22px] text-primaryColor"
                icon="ion:calendar-clear"
              />
              <span className="text-sm font-bold text-[#3A3A3A]">
                02.06.2022 - 25.09.2023
              </span>
            </button>
            <ReportButton text={"Generate Report"} icon={"ion:rocket"} />
          </div>
        </div>
        <div className="mt-5">
          <div className="overflow-x-auto mt-10 max-[576px]:mt-5">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-primaryColor rounded-[10px]">
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[105px]">
                      Date & Time
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[120px]">
                      Impressions
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Clicks
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Conversions
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Revenue
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Payout
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      Profit
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      CPC
                    </p>
                  </th>
                  <th className="p-5 max-[576px]:p-3">
                    <p className="text-base font-medium text-white text-left w-[100px]">
                      RPC
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((data) => (
                  <>
                    <tr key={data?.id}>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.date}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.impressions}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.clicks}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.convention}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.revenue}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.payout}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.profit}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.cpc}
                        </p>
                      </td>
                      <td className="p-5 max-[576px]:p-3">
                        <p className="text-sm font-normal text-primaryColor text-left">
                          {data?.rpc}
                        </p>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tr className="bg-[#DDDFE2]">
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    Total
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    2.6%
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    200
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    22
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    $10.00
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    $8.00
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    $2.00
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    2.6667
                  </p>
                </td>
                <td className="px-5 py-2 max-[576px]:px-3">
                  <p className="text-sm font-normal text-primaryColor text-left">
                    2.6667
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedReport;
