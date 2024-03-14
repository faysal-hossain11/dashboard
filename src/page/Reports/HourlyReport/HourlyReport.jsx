import { Icon } from "@iconify/react";
import SaveTable from "../../../components/Reports/Table-Feature/SaveTable";
import DownloadTable from "../../../components/Reports/Table-Feature/DownloadTable";
import { useState } from "react";
import OfferDropdown from "../../../components/Reports/OfferDropdown";
import ReportBlackButton from "../../../components/Button/ReportBlackButton";
import GrayButton from "../../../components/Button/GrayButton";
import { Headers } from "../../../components/Headers/Headers";
import GeneralButton from "../../../components/Button/GeneralButton";

const dailyReport = [
  {
    id: `2023-05-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-12-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-05-18`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-05-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-05-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-05-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-05-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `2023-05-08`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
  {
    id: `Total`,
    impression: `2.6%`,
    click: 200,
    conversions: 22,
    revenue: `$10.00`,
    payout: `$8.00`,
    profit: `$2.00`,
    cpc: `2.6667`,
    rpc: `3.3333`,
  },
];

const HourlyReport = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <div className="xl:mb-[60px] md:mb-10 mb-5">
        <Headers text={{ heading: "Hourly Report" }}>
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
          <SaveTable />
          <DownloadTable />
        </div>
        <div>
          <div className="md:flex  items-center gap-5">
            <p className="flex mb-5 md:mb-0 md:justify-start items-center gap-2 py-[6px] px-4 rounded-[10px] border border-primaryColor w-[230px] justify-center">
              <Icon icon="uis:calender" />
              02.06.2022 - 25.09.2023
            </p>
            <ReportBlackButton
              text="Generate Report"
              icon="ion:rocket"
            ></ReportBlackButton>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-white overflow-x-auto">
          <table className=" w-full table-auto">
            <thead>
              <tr className="text-left bg-primaryColor text-white">
                <th className="py-3 pl-3 pr-[100px]">Date & Time</th>
                <th className="py-3 pr-[80px]">Impressions</th>
                <th className="py-3 pr-[80px]">Clicks</th>
                <th className="py-3 pr-[80px]">Conversions</th>
                <th className="py-3 pr-[80px]">Revenue</th>
                <th className="py-3 pr-[80px]">Payout</th>
                <th className="py-3 pr-[80px]">Profit</th>
                <th className="py-3 pr-[80px]">CPC</th>
                <th className="py-3">RPC</th>
              </tr>
            </thead>
            <tbody>
              {dailyReport.map((item, i) => (
                <tr key={i} className="">
                  <td className=" py-4 pr-3 pl-3">{item.id}</td>
                  <td className=" py-4 pr-3">{item.impression}</td>
                  <td className=" py-4 pr-3 ">{item.click}</td>
                  <td className=" py-4 pr-3 ">{item.conversions}</td>
                  <td className=" py-4 pr-3 ">{item.revenue}</td>
                  <td className=" py-4 pr-3 ">{item.payout}</td>
                  <td className=" py-4 pr-3 ">{item.profit}</td>
                  <td className=" py-4 pr-3 ">{item.cpc}</td>
                  <td className=" py-4 pr-3 ">{item.rpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HourlyReport;
