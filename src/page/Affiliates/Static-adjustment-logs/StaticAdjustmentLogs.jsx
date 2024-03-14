import SuccessPendingButton from "../../../components/Button/SuccessPendingButton";
import { Headers } from "../../../components/Headers/Headers";

const StaticAdjustmentLogs = () => {
  const tableData = [
    {
      _id: 1,
      id: "02",
      date: "2023-05-08",
      offer: "SweepstakesADay - Win....",
      time: "2023-05-08",
      goal: "Default",
      quantity: "20",
      affiliate: "Future Innovation,",
      amount: "$22",
      payout: "$22",
      owner: "Mahedi",
      action: "Add Conversion",
    },
    {
      _id: 2,
      id: "02",
      date: "2023-05-08",
      offer: "SweepstakesADay - Win....",
      time: "2023-05-08",
      goal: "Default",
      quantity: "20",
      affiliate: "Future Innovation,",
      amount: "$22",
      payout: "$22",
      owner: "Mahedi",
      action: "Add Conversion",
    },
    {
      _id: 3,
      id: "02",
      date: "2023-05-08",
      offer: "SweepstakesADay - Win....",
      time: "2023-05-08",
      goal: "Default",
      quantity: "20",
      affiliate: "Future Innovation,",
      amount: "$22",
      payout: "$22",
      owner: "Mahedi",
      action: "Add Conversion",
    },
    {
      _id: 4,
      id: "02",
      date: "2023-05-08",
      offer: "SweepstakesADay - Win....",
      time: "2023-05-08",
      goal: "Default",
      quantity: "20",
      affiliate: "Future Innovation,",
      amount: "$22",
      payout: "$22",
      owner: "Mahedi",
      action: "Add Conversion",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "Activity Logs" }}></Headers>
      <div className="overflow-x-auto mt-[31px] max-[576px]:mt-4 px-[15px] py-10 bg-white rounedd-[10px] max-[576px]:py-5">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primaryColor rounded-[10px]">
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[40px]">
                  ID
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[110px]">
                  Affected Date
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[155px]">
                  Offer
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[70px]">
                  Time
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[40px]">
                  Goal
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[70px]">
                  Quantity
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[110px]">
                  Affiliate
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[60px]">
                  Amount
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[70px]">
                  Payout
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[80px]">
                  Done By
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[60px]">
                  Status
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-white text-left w-[100px]">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <>
                <tr key={data?._id}>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.id}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.date}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.offer}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.time}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.goal}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.quantity}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.affiliate}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.amount}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.payout}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.owner}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <SuccessPendingButton text={"Completed"} bg={"completed"} />
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.action}
                    </p>
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

export default StaticAdjustmentLogs;
