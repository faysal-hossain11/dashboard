import { Icon } from "@iconify/react";
import DownloadTable from "../../../components/Reports/Table-Feature/DownloadTable";
import { useState } from "react";
import OfferDropdown from "../../../components/Reports/OfferDropdown";
import { Headers } from "../../../components/Headers/Headers";
import GeneralButton from "../../../components/Button/GeneralButton";
import GrayButton from "../../../components/Button/GrayButton";
import ReportButton from "../../../components/Button/ReportButton";

const AdvertiserReport = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <div className="xl:mb-[60px] md:mb-10 mb-5">
        <Headers text={{ heading: "Advertiser Report" }}>
          <div onClick={handleClick}>
            <GeneralButton
              text={"Report Options"}
              icon={"iconamoon:arrow-down-2-fill"}
            />
          </div>
        </Headers>
      </div>
      {isShown && <OfferDropdown />}
      <div className="py-5 px-4 bg-white rounded-[10px] md:flex items-center justify-between ">
        <div className="flex items-center justify-center md:justify-start mb-5 md:mb-0 gap-[20px]">
          <GrayButton icon={"solar:copy-bold"} />
          <GrayButton icon={"ion:analytics-sharp"} />
          <DownloadTable />
        </div>
        <div>
          <div className="md:flex  items-center gap-5">
            <p className="flex mb-5 md:mb-0 md:justify-start items-center gap-2 py-[6px] px-4 rounded-[10px] border border-primaryColor w-[230px] justify-center">
              <Icon icon="uis:calender" />
              02.06.2022 - 25.09.2023
            </p>
            <ReportButton text={"Generate Report"} icon={"ion:rocket"} />
          </div>
        </div>
      </div>
      <div>
        <div className=" overflow-x-auto bg-white mb-5">
          <table className=" w-full table-auto">
            <thead>
              <tr className=" bg-primaryColor text-white ">
                <th className="pr-[70px] text-[15px]">Advertiser Name</th>
                <th className="pr-[70px]">Date & Time</th>
                <th className="pr-[70px]">Impressions</th>
                <th className="pr-[70px]">Clicks</th>
                <th className="pr-[70px]">Conversions</th>
                <th className="pr-[70px]">Revenue</th>
                <th className="pr-[70px]">Payout</th>
                <th className="pr-[70px]">Profit</th>
                <th className="pr-[70px]">CPC</th>
                <th className="pr-[70px]">RPC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="pt-5">
                <td className="pt-5 pl-3">Mahedi</td>
                <td className="pt-5">2023-05-08</td>
                <td className="pt-5">2.6%</td>
                <td className="pt-5">200</td>
                <td className="pt-5">22</td>
                <td className="pt-5">$10.00</td>
                <td className="pt-5">$8.00</td>
                <td className="pt-5">$2.00</td>
                <td className="pt-5">2.6667</td>
                <td className="pt-5">2.6667</td>
              </tr>
              <tr className="pt-5">
                <td className="pt-5 pl-3">Mahedi</td>
                <td className="pt-5">2023-05-08</td>
                <td className="pt-5">2.6%</td>
                <td className="pt-5">200</td>
                <td className="pt-5">22</td>
                <td className="pt-5">$10.00</td>
                <td className="pt-5">$8.00</td>
                <td className="pt-5">$2.00</td>
                <td className="pt-5">2.6667</td>
                <td className="pt-5">2.6667</td>
              </tr>
              <tr className="pt-5">
                <td className="pt-5 pl-3">Mahedi</td>
                <td className="pt-5">2023-05-08</td>
                <td className="pt-5">2.6%</td>
                <td className="pt-5">200</td>
                <td className="pt-5">22</td>
                <td className="pt-5">$10.00</td>
                <td className="pt-5">$8.00</td>
                <td className="pt-5">$2.00</td>
                <td className="pt-5">2.6667</td>
                <td className="pt-5">2.6667</td>
              </tr>
              <tr className="pt-5">
                <td className="pt-5 pl-3">Mahedi</td>
                <td className="pt-5">2023-05-08</td>
                <td className="pt-5">2.6%</td>
                <td className="pt-5">200</td>
                <td className="pt-5">22</td>
                <td className="pt-5">$10.00</td>
                <td className="pt-5">$8.00</td>
                <td className="pt-5">$2.00</td>
                <td className="pt-5">2.6667</td>
                <td className="pt-5">2.6667</td>
              </tr>
              <tr className="pt-5">
                <td className="pt-5 pb-5 pl-3">Mahedi</td>
                <td className="pt-5 pb-5">2023-05-08</td>
                <td className="pt-5 pb-5">2.6%</td>
                <td className="pt-5 pb-5">200</td>
                <td className="pt-5 pb-5">22</td>
                <td className="pt-5 pb-5">$10.00</td>
                <td className="pt-5 pb-5">$8.00</td>
                <td className="pt-5 pb-5">$2.00</td>
                <td className="pt-5 pb-5">2.6667</td>
                <td className="pt-5 pb-5">2.6667</td>
              </tr>
              <tr className=" font-bold bg-[#DDDFE2]">
                <td className="pt-2 pb-2 pl-3">Total</td>
                <td className="pt-2 pb-2">-</td>
                <td className="pt-2 pb-2">2.6%</td>
                <td className="pt-2 pb-2">200</td>
                <td className="pt-2 pb-2">22</td>
                <td className="pt-2 pb-2">$10.00</td>
                <td className="pt-2 pb-2">$8.00</td>
                <td className="pt-2 pb-2">$2.00</td>
                <td className="pt-2 pb-2">2.6667</td>
                <td className="pt-2 pb-2">2.6667</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserReport;
